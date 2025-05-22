import { Arg, Query, Resolver } from 'type-graphql';

import ConsultationEntity from '../entities/consultation.entity';
import { Between } from 'typeorm';

@Resolver(ConsultationEntity)
class ConsultationResolver {
  @Query(() => [ConsultationEntity])
  async getByDay(@Arg('date', () => Date) date: Date): Promise<ConsultationEntity[]> {
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
}

export default ConsultationResolver;
