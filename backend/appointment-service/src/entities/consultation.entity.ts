import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

import ConsultationMotifEntity from './consultation_motif.entity';
import NoteSecretEntity from './note_secret.entity';

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
}

export default ConsultationEntity;
