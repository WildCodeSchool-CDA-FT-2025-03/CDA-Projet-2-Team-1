import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

import FileEntity from './file.entity';
import NoteConfidentialEntity from './note_confidential.entity';
import NoteSecretaryEntity from './note_secretary.entity';
import PatientEntity from './patient.entity';
import ReasonConsultationEntity from './reason_consultation.entity';
import UserEntity from './user.entity';

@ObjectType()
@Entity('consultation')
class ConsultationEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  date: Date;

  @Field()
  @Column({ type: 'interval', nullable: false })
  duration: string;

  @ManyToOne(() => PatientEntity, (patient) => patient.consultations)
  @JoinColumn({ name: 'patient_id' })
  patient: PatientEntity;

  @OneToOne(() => NoteSecretaryEntity, (note) => note.consultations)
  @JoinColumn({ name: 'note_secretary_id' })
  note_secretary: NoteSecretaryEntity;

  @OneToOne(() => NoteConfidentialEntity, (note) => note.consultations)
  @JoinColumn({ name: 'note_confidential_id' })
  note_confidential: NoteConfidentialEntity;

  @ManyToOne(() => ReasonConsultationEntity, (reason) => reason.consultations)
  @JoinColumn({ name: 'reason_consultation_id' })
  reason_consultation: ReasonConsultationEntity;

  @ManyToOne(() => UserEntity, (user) => user.createdConsultations)
  @JoinColumn({ name: 'created_by' })
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.assignedConsultations)
  @JoinColumn({ name: 'doctor_assigned_id' })
  doctor_assigned_id: UserEntity;

  @OneToMany(() => FileEntity, (file) => file.consultation)
  files: FileEntity[];
}

export default ConsultationEntity;
