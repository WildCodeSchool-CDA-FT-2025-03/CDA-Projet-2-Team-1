import { Field, ID, ObjectType } from 'type-graphql';

import DoctorAvailabilityEntity from '../entities/doctor-availability.entity';
import ServiceEntity from '../entities/service.entity';
import UserEntity from '../entities/user.entity';

@ObjectType()
export class DoctorUser {
  @Field(() => ID)
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  specialization?: string;

  @Field({ name: 'isActive' })
  is_active: boolean;

  @Field({ name: 'createdAt' })
  created_at: Date;

  @Field({ name: 'updatedAt' })
  updated_at: Date;

  @Field(() => ServiceEntity)
  service: ServiceEntity;

  @Field(() => [DoctorAvailabilityEntity])
  availabilities: DoctorAvailabilityEntity[];

  // Méthode statique pour convertir UserEntity en DoctorUser
  static fromUserEntity(user: UserEntity): DoctorUser {
    const doctor = new DoctorUser();
    doctor.id = user.id;
    doctor.firstname = user.firstname;
    doctor.lastname = user.lastname;
    doctor.email = user.email;
    doctor.phone = user.phone;
    doctor.specialization = user.specialization;
    doctor.is_active = user.is_active;
    doctor.created_at = user.created_at;
    doctor.updated_at = user.updated_at;
    doctor.service = user.service;
    doctor.availabilities = user.availabilities || [];
    return doctor;
  }
}
