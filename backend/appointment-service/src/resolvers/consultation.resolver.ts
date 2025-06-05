import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';
import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Between } from 'typeorm';
import ConsultationEntity from '../entities/consultation.entity';
import PatientEntity from '../entities/patient.entity';
import UserEntity from '../entities/user.entity';

// Créer une classe d'erreur personnalisée pour éviter l'import de graphql
class CustomGraphQLError extends Error {
  public extensions: { code: string };

  constructor(message: string, options?: { extensions?: { code: string } }) {
    super(message);
    this.name = 'GraphQLError';
    this.extensions = options?.extensions || { code: 'INTERNAL_ERROR' };
  }
}

@InputType()
class CreateConsultationInput {
  @Field(() => ID)
  // @IsUUID('4', { message: 'Patient ID must be a valid UUID' }) // TEMPORAIREMENT DÉSACTIVÉ
  patientId: string;

  @Field(() => ID)
  // @IsUUID('4', { message: 'Doctor ID must be a valid UUID' }) // TEMPORAIREMENT DÉSACTIVÉ
  doctorId: string;

  @Field()
  @IsDateString({}, { message: 'Start date must be a valid ISO date string' })
  dateStart: string;

  @Field()
  @IsDateString({}, { message: 'End date must be a valid ISO date string' })
  dateEnd: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  reason?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  additionalNotes?: string;
}

@Resolver(ConsultationEntity)
class ConsultationResolver {
  @Query(() => [ConsultationEntity])
  async getConsultationByDay(@Arg('date', () => Date) date: Date): Promise<ConsultationEntity[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return ConsultationEntity.find({
      where: {
        date_start: Between(startOfDay, endOfDay),
      },
      relations: ['patient.ssn', 'doctor.service'],
    });
  }

  @Query(() => [ConsultationEntity])
  async getConsultationsByDoctorAndDateRange(
    @Arg('doctorId', () => String) doctorId: string,
    @Arg('startDate', () => Date) startDate: Date,
    @Arg('endDate', () => Date) endDate: Date
  ): Promise<ConsultationEntity[]> {
    return ConsultationEntity.find({
      where: {
        doctor: { id: doctorId },
        date_start: Between(startDate, endDate),
      },
      relations: ['patient.ssn', 'doctor'],
    });
  }

  @Mutation(() => ConsultationEntity)
  async createConsultation(
    @Arg('input') input: CreateConsultationInput
  ): Promise<ConsultationEntity> {
    try {
      // Verify patient exists
      const patient = await PatientEntity.findOne({
        where: { id: input.patientId },
        relations: ['ssn'],
      });
      if (!patient) {
        throw new CustomGraphQLError('Patient not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }

      // Verify doctor exists
      const doctor = await UserEntity.findOne({
        where: { id: input.doctorId },
        relations: ['service'],
      });
      if (!doctor) {
        throw new CustomGraphQLError('Doctor not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }

      // Check for time slot conflicts
      const startDate = new Date(input.dateStart);
      const endDate = new Date(input.dateEnd);

      const conflictingConsultation = await this.checkTimeSlotConflict(
        input.doctorId,
        startDate,
        endDate
      );

      if (conflictingConsultation) {
        throw new CustomGraphQLError('Time slot is already occupied', {
          extensions: { code: 'CONFLICT' },
        });
      }

      // Create consultation
      const consultation = ConsultationEntity.create({
        date_start: startDate,
        date_end: endDate,
        reason: input.reason,
        additional_notes: input.additionalNotes,
        patient,
        doctor,
      });

      const savedConsultation = await consultation.save();

      // Return with relations loaded
      return ConsultationEntity.findOne({
        where: { id: savedConsultation.id },
        relations: ['patient.ssn', 'doctor.service'],
      }) as Promise<ConsultationEntity>;
    } catch (error) {
      if (error instanceof CustomGraphQLError) {
        throw error;
      }
      throw new CustomGraphQLError('Failed to create consultation', {
        extensions: { code: 'INTERNAL_ERROR' },
      });
    }
  }

  private async checkTimeSlotConflict(
    doctorId: string,
    startDate: Date,
    endDate: Date
  ): Promise<ConsultationEntity | null> {
    return ConsultationEntity.createQueryBuilder('consultation')
      .where('consultation.doctor_assigned_id = :doctorId', { doctorId })
      .andWhere('(consultation.date_start < :endDate AND consultation.date_end > :startDate)', {
        startDate,
        endDate,
      })
      .getOne();
  }
}

export default ConsultationResolver;
