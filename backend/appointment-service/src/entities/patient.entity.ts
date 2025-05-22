import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import CityEntity from './city.entity';
import SsnEntity from './ssn.entity';

@ObjectType()
@Entity('patient')
class PatientEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 64 })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 64 })
  lastname: string;

  @Field({ nullable: true })
  @Column({ type: 'timestamptz', nullable: true })
  birthdate: Date;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 16 })
  gender: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 128 })
  email: string;

  @Field(() => SsnEntity, { nullable: false })
  @ManyToOne(() => SsnEntity, (ssn) => ssn.patient, { nullable: false })
  @JoinColumn({ name: 'ssn_id' })
  ssn: SsnEntity;

  @Field(() => CityEntity, { nullable: false })
  @ManyToOne(() => CityEntity, (city) => city.patients, { nullable: true })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;
}

export default PatientEntity;
