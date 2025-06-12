import { Repository } from 'typeorm';
import DoctorAvailabilityEntity from '../entities/doctor-availability.entity';
import UserEntity from '../entities/user.entity';

export interface CreateAvailabilityData {
  doctorId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface UpdateAvailabilityData {
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
  isActive?: boolean;
}

export class AvailabilityService {
  constructor(
    private availabilityRepository: Repository<DoctorAvailabilityEntity>,
    private userRepository: Repository<UserEntity>
  ) {}

  // Récupérer les disponibilités d'un docteur
  async getDoctorAvailabilities(doctorId: string): Promise<DoctorAvailabilityEntity[]> {
    return this.availabilityRepository.find({
      where: {
        doctor: { id: doctorId },
        is_active: true,
      },
      relations: ['doctor'],
      order: {
        day_of_week: 'ASC',
        start_time: 'ASC',
      },
    });
  }

  // Récupérer les disponibilités pour un jour spécifique
  async getDoctorAvailabilitiesByDay(
    doctorId: string,
    dayOfWeek: number
  ): Promise<DoctorAvailabilityEntity[]> {
    return this.availabilityRepository.find({
      where: {
        doctor: { id: doctorId },
        day_of_week: dayOfWeek,
        is_active: true,
      },
      relations: ['doctor'],
      order: {
        start_time: 'ASC',
      },
    });
  }

  // Créer une nouvelle disponibilité
  async createAvailability(data: CreateAvailabilityData): Promise<DoctorAvailabilityEntity> {
    // Vérifier que le docteur existe
    const doctor = await this.userRepository.findOne({
      where: {
        id: data.doctorId,
        role: { name: 'doctor' },
      },
      relations: ['role'],
    });

    if (!doctor) {
      throw new Error('Doctor not found');
    }

    // Vérifier qu'il n'y a pas de conflit
    const conflictingAvailability = await this.checkTimeConflict(
      data.doctorId,
      data.dayOfWeek,
      data.startTime,
      data.endTime
    );

    if (conflictingAvailability) {
      throw new Error('Time slot conflicts with existing availability');
    }

    const availability = this.availabilityRepository.create({
      day_of_week: data.dayOfWeek,
      start_time: data.startTime,
      end_time: data.endTime,
      doctor: doctor,
      is_active: true,
    });

    return this.availabilityRepository.save(availability);
  }

  // Mettre à jour une disponibilité
  async updateAvailability(
    id: string,
    data: UpdateAvailabilityData
  ): Promise<DoctorAvailabilityEntity | null> {
    const availability = await this.availabilityRepository.findOne({
      where: { id },
      relations: ['doctor'],
    });

    if (!availability) {
      return null;
    }

    // Vérifier les conflits si on change les horaires
    if (
      data.dayOfWeek !== undefined ||
      data.startTime !== undefined ||
      data.endTime !== undefined
    ) {
      const newDayOfWeek = data.dayOfWeek ?? availability.day_of_week;
      const newStartTime = data.startTime ?? availability.start_time;
      const newEndTime = data.endTime ?? availability.end_time;

      const conflictingAvailability = await this.checkTimeConflict(
        availability.doctor.id,
        newDayOfWeek,
        newStartTime,
        newEndTime,
        id // Exclure cette disponibilité du check
      );

      if (conflictingAvailability) {
        throw new Error('Time slot conflicts with existing availability');
      }
    }

    // Mettre à jour les champs
    if (data.dayOfWeek !== undefined) availability.day_of_week = data.dayOfWeek;
    if (data.startTime !== undefined) availability.start_time = data.startTime;
    if (data.endTime !== undefined) availability.end_time = data.endTime;
    if (data.isActive !== undefined) availability.is_active = data.isActive;

    return this.availabilityRepository.save(availability);
  }

  // Supprimer une disponibilité
  async deleteAvailability(id: string): Promise<boolean> {
    const result = await this.availabilityRepository.delete(id);
    return result.affected !== null && result.affected !== undefined && result.affected > 0;
  }

  // Vérifier les conflits d'horaires
  private async checkTimeConflict(
    doctorId: string,
    dayOfWeek: number,
    startTime: string,
    endTime: string,
    excludeId?: string
  ): Promise<DoctorAvailabilityEntity | null> {
    const queryBuilder = this.availabilityRepository
      .createQueryBuilder('availability')
      .where('availability.doctor_id = :doctorId', { doctorId })
      .andWhere('availability.day_of_week = :dayOfWeek', { dayOfWeek })
      .andWhere('availability.is_active = :isActive', { isActive: true })
      .andWhere('(availability.start_time < :endTime AND availability.end_time > :startTime)', {
        startTime,
        endTime,
      });

    if (excludeId) {
      queryBuilder.andWhere('availability.id !== :excludeId', { excludeId });
    }

    return queryBuilder.getOne();
  }
}
