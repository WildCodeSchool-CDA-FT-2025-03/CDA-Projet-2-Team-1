import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import PatientEntity from './patient.entity';

@ObjectType()
@Entity('city')
class CityEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  name: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 16 })
  zip_code: string;

  @OneToMany(() => PatientEntity, (patient) => patient.city)
  patient: PatientEntity[];
}

export default CityEntity;
