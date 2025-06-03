import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import PatientEntity from './patient.entity';

@ObjectType()
@Entity('city')
class CityEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 128, nullable: false })
  name: string;

  @Field({ nullable: false })
  @Column({ type: 'varchar', length: 16, nullable: false })
  zip_code: string;

  @Field(() => [PatientEntity])
  @OneToMany(() => PatientEntity, (patient) => patient.city)
  patients: PatientEntity[];
}

export default CityEntity;
