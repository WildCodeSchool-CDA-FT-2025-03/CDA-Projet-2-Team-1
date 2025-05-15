import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import SsnEntity from './ssn.entity';

@ObjectType()
@Entity('patient')
class PatientEntity extends BaseEntity {
  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  lastname: string;

  @ManyToOne(() => SsnEntity, (ssn) => ssn.patient, { nullable: false })
  @JoinColumn({ name: 'ssn_id' })
  ssn: SsnEntity;
}

export default PatientEntity;
