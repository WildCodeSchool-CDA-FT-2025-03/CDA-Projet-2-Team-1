import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import PatientEntity from './patient.entity';
import UserEntity from './user.entity';

@ObjectType()
@Entity('consulation')
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

  @ManyToOne(() => PatientEntity, (patient) => patient.consultation, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patient_id' })
  patient: PatientEntity;

  @ManyToOne(() => UserEntity, (user) => user.consultation, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'doctor_assigned_id' })
  doctor: UserEntity;
}

export default ConsultationEntity;
