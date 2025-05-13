import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ConsultationEntity from './consultation.entity';

@ObjectType()
@Entity('note_secretary')
class NoteSecretaryEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 512 })
  text: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  update_at: Date;

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.note_secretary)
  consultations: ConsultationEntity[];
}

export default NoteSecretaryEntity;
