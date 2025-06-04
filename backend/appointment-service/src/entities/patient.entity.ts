import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Field, ObjectType } from 'type-graphql';

import CityEntity from './city.entity';
import SsnEntity from './ssn.entity';
import ConsultationEntity from './consultation.entity';

@ObjectType()
@Entity('patient')
class PatientEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  lastname: string;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  birthdate: Date;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 1 })
  gender: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 128 })
  email: string;

  @Field(() => SsnEntity, { nullable: false })
  @ManyToOne(() => SsnEntity, (ssn) => ssn.patient, { nullable: false, cascade: true })
  @JoinColumn({ name: 'ssn_id' })
  ssn: SsnEntity;

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.patient)
  consultation: ConsultationEntity[];

  @Field(() => CityEntity, { nullable: false })
  @ManyToOne(() => CityEntity, (city) => city.patients, { nullable: false, cascade: true })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;
}

export default PatientEntity;
