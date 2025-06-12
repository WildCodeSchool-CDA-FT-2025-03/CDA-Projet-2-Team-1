import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import ConsultationEntity from './consultation.entity';
import DoctorAvailabilityEntity from './doctor-availability.entity';
import RestEntity from './rest.entity';
import RoleEntity from './role.entity';
import ServiceEntity from './service.entity';

@ObjectType()
@Entity('user')
class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 100, nullable: false })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', length: 100, nullable: false })
  lastname: string;

  @Field()
  @Column({ type: 'char', length: 1, nullable: false })
  genre: string;

  @Field()
  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  // Pas exposé à GraphQL
  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  // Champs pour les docteurs
  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 150, nullable: true })
  specialization?: string;

  @Field({ name: 'isActive' })
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Field({ name: 'createdAt' })
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Field({ name: 'updatedAt' })
  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Field(() => ServiceEntity, { nullable: true })
  @ManyToOne(() => ServiceEntity, (service) => service.user, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'service_id' })
  service: ServiceEntity;

  @Field(() => RoleEntity, { nullable: true })
  @ManyToOne(() => RoleEntity, (role) => role.user, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToMany(() => RestEntity, (rest) => rest.user)
  rest: RestEntity[];

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.doctor)
  consultation: ConsultationEntity[];

  @Field(() => [DoctorAvailabilityEntity])
  @OneToMany(() => DoctorAvailabilityEntity, (availability) => availability.doctor)
  availabilities: DoctorAvailabilityEntity[];
}

export default UserEntity;
