import { Field, InputType, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import PatientEntity from './patient.entity';

@InputType()
export class CityInput {
  @Field()
  name: string;

  @Field()
  zip_code: string;
}

@ObjectType()
@Entity('city')
class CityEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 128, nullable: false, unique: true })
  name: string;

  @Field({ nullable: false })
  @Column({ type: 'varchar', length: 16, nullable: false, unique: true })
  zip_code: string;

  @Field(() => [PatientEntity])
  @OneToMany(() => PatientEntity, (patient) => patient.city)
  patients: PatientEntity[];
}

export default CityEntity;
