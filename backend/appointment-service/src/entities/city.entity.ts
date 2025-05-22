import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import PatientEntity from './patient.entity';

@ObjectType()
@Entity('city')
class CityEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 128 })
  name: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 16, nullable: true })
  zip_code: string;

  @Field(() => [PatientEntity])
  @OneToMany(() => PatientEntity, (patient) => patient.city)
  patients: PatientEntity[];
}

export default CityEntity;
