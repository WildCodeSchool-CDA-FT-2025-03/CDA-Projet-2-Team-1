import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import UserEntity from './user.entity';

@ObjectType()
@Entity('doctor_availability')
class DoctorAvailabilityEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ name: 'dayOfWeek' })
  @Column({ type: 'integer', nullable: false })
  day_of_week: number; // 0 = Sunday, 1 = Monday, etc.

  @Field({ name: 'startTime' })
  @Column({ type: 'time', nullable: false })
  start_time: string;

  @Field({ name: 'endTime' })
  @Column({ type: 'time', nullable: false })
  end_time: string;

  @Field({ name: 'isActive' })
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Field({ name: 'createdAt' })
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.availabilities, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  doctor: UserEntity;
}

export default DoctorAvailabilityEntity;
