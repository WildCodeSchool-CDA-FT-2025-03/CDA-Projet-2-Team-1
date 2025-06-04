import { Arg, Query, Resolver, UseMiddleware } from 'type-graphql';
import ConsultationEntity from '../entities/consultation.entity';
import { Between } from 'typeorm';
import { CacheMiddleware } from '../middlewares/cache.middleware';

@Resolver(ConsultationEntity)
class ConsultationResolver {
  @UseMiddleware(CacheMiddleware(15 * 60))
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
  async getConsultationBySsnForAgent(
    @Arg('ssn', () => String) ssn: string
  ): Promise<ConsultationEntity[]> {
    return ConsultationEntity.find({
      where: {
        patient: {
          ssn: {
            number: ssn,
          },
        },
      },
      relations: ['patient.ssn', 'doctor.service'],
    });
  }
}

export default ConsultationResolver;
