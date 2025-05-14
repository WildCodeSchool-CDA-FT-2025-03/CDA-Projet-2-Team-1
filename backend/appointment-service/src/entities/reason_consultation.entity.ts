import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import ConsultationEntity from './consultation.entity';

@ObjectType()
@Entity('reason_consultation')
class ReasonConsultationEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 128 })
  name: string;

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.reason_consultation)
  consultations: ConsultationEntity[];
}

export default ReasonConsultationEntity;
