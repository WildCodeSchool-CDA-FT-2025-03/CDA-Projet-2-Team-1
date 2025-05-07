import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import ConsultationMotifEntity from './consultation_motif.entity';

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
  @Column({ type: 'time', nullable: false })
  date_time: Date;

  @ManyToOne(() => ConsultationMotifEntity, (motif) => motif.consultations)
  motif: ConsultationMotifEntity;
}

export default ConsultationEntity;
