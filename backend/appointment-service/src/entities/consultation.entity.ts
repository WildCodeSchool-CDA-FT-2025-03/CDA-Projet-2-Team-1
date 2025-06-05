import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { IsOptional, IsString, MaxLength } from 'class-validator';

import PatientEntity from './patient.entity';
import UserEntity from './user.entity';

@ObjectType()
@Entity('consultation')
class ConsultationEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  date_start: Date;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  date_end: Date;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  reason?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  additional_notes?: string;

  @Field(() => PatientEntity)
  @ManyToOne(() => PatientEntity, (patient) => patient.consultation, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patient_id' })
  patient: PatientEntity;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.consultation, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'doctor_assigned_id' })
  doctor: UserEntity;

  @Field()
  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at: Date;

  @Field()
  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updated_at: Date;
}

export default ConsultationEntity;
