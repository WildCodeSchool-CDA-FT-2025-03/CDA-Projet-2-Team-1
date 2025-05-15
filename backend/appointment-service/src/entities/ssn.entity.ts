import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import PatientEntity from './patient.entity';

@ObjectType()
@Entity('ssn')
class SsnEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 15 })
  number: string;

  @OneToMany(() => PatientEntity, (patient) => patient.ssn)
  patient: PatientEntity[];
}

export default SsnEntity;
