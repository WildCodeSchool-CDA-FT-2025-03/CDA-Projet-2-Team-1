import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import ConsultationEntity from './consultation.entity';
import FileEntity from './file.entity';

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

  @ManyToMany(() => FileEntity, (file) => file.notes_secrets)
  @JoinTable()
  file: FileEntity;
}

export default NoteSecretEntity;
