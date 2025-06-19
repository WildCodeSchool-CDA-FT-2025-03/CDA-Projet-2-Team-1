import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  updated_at: Date;

  @Field(() => ConsultationEntity)
  @OneToOne(() => ConsultationEntity, (consultation) => consultation.note_secretary, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'consultation_id' })
  consultation: ConsultationEntity;
}

export default NoteSecretaryEntity;
