import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import CityEntity from './city.entity';
import ConsultationEntity from './consultation.entity';
import SsnEntity from './ssn.entity';

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
  @Column({ type: 'char', nullable: false, length: 1 })
  gender: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 255 })
  email: string;

  @ManyToOne(() => SsnEntity, (ssn) => ssn.patient, { nullable: false })
  @JoinColumn({ name: 'ssn_id' })
  ssn: SsnEntity;

  @ManyToOne(() => CityEntity, (city) => city.patient, { nullable: false })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.patient)
  consultations: ConsultationEntity[];
}

export default PatientEntity;
