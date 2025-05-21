import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import SsnEntity from './ssn.entity';

@ObjectType()
@Entity('patient')
class PatientEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 64 })
  firstName: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 64 })
  lastName: string;

  @Field(() => SsnEntity, { nullable: false })
  @ManyToOne(() => SsnEntity, (ssn) => ssn.patient, { nullable: false })
  @JoinColumn({ name: 'ssn_id' })
  ssn: SsnEntity;
}

export default PatientEntity;
