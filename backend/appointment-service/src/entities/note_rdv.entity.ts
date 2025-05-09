import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ConsultationEntity from './consultation.entity';

@ObjectType()
@Entity('note_rdv')
class NoteRdvEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 512 })
  text: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  update_at: Date;

  @OneToOne(() => ConsultationEntity, (consultation) => consultation.note_rdv)
  consultation: ConsultationEntity;
}

export default NoteRdvEntity;
