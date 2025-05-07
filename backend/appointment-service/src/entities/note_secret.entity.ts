import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import ConsultationEntity from './consultation.entity';

@ObjectType()
@Entity('note_secret')
class NoteSecretEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 64 })
  title: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 512 })
  text: string;

  @Field()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @ManyToOne(() => ConsultationEntity, (consultation) => consultation.notes_secrets)
  consultation: ConsultationEntity;
}

export default NoteSecretEntity;
