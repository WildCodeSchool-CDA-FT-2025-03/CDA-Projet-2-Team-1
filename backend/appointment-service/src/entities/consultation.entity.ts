import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import ConsultationMotifEntity from './consultation_motif.entity';
import NoteSecretEntity from './note_secret.entity';
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
  date: Date;

  @Field()
  @Column({ type: 'interval', nullable: false })
  duration: string;

  @ManyToOne(() => ConsultationMotifEntity, (motif) => motif.consultations)
  motif: ConsultationMotifEntity;

  @OneToMany(() => NoteSecretEntity, (note) => note.consultation)
  notes_secrets: NoteSecretEntity[];

  @ManyToMany(() => PatientEntity, (patient) => patient.consultation, { nullable: false })
  patient: PatientEntity;

  @ManyToMany(() => UserEntity, (users) => users.consultation)
  users: UserEntity;
}

export default ConsultationEntity;
