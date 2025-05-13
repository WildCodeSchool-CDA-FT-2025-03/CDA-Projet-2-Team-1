import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import ConsultationEntity from './consultation.entity';

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
  @CreateDateColumn({ type: 'timestamp with time zone', nullable: false })
  created_at: Date;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  path: string;

  @Field()
  @Column({ type: 'boolean', nullable: false, default: false })
  isConfidential: boolean;

  @ManyToOne(() => ConsultationEntity, (consultation) => consultation.files)
  @JoinColumn({ name: 'consultation_id' })
  consultation: ConsultationEntity;
}

export default FileEntity;
