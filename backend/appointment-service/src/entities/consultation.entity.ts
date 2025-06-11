import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import NoteSecretaryEntity from './note-secretary.entity';
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

  @Field(() => NoteSecretaryEntity)
  @OneToOne(() => NoteSecretaryEntity, (note) => note.consultation, {
    nullable: true,
    cascade: true,
  })
  @JoinColumn({ name: 'note_secretary_id' })
  note_secretary: NoteSecretaryEntity;
}

export default ConsultationEntity;
