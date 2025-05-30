import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Matches } from 'class-validator';
import PatientEntity from './patient.entity';

@InputType()
export class SsnInput {
  @Field()
  @Matches(/[0-9]{15}/)
  number: string;
}

@ObjectType()
@Entity('ssn')
class SsnEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 15 })
  number: string;

  @Field(() => [PatientEntity], { nullable: false })
  @OneToMany(() => PatientEntity, (patient) => patient.ssn)
  patient: PatientEntity[];
}

export default SsnEntity;
