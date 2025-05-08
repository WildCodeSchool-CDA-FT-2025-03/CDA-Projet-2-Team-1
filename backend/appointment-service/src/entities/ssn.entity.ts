import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
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

  @OneToOne(() => PatientEntity, (patient) => patient.ssn)
  @JoinColumn()
  patient: PatientEntity;
}

export default SsnEntity;
