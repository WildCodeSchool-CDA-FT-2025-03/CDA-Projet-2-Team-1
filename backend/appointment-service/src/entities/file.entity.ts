import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import NoteSecretEntity from './note_secret.entity';

@ObjectType()
@Entity('file')
class FileEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  name: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone', nullable: false })
  created_at: Date;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  path: string;

  @ManyToOne(() => NoteSecretEntity, (notes_secrets) => notes_secrets.file)
  notes_secrets: NoteSecretEntity;
}

export default FileEntity;
