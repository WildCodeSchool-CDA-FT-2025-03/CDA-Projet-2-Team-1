import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

import ConsultationEntity from './consultation.entity';
import { Service } from './Service';

@ObjectType()
@Entity('doctor')
export class Doctor {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 100, nullable: false })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', length: 100, nullable: false })
  lastname: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  email?: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 150, nullable: true })
  specialization?: string;

  @Field()
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Field(() => Service)
  @ManyToOne(() => Service, (service) => service.doctors)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.doctor)
  consultations: ConsultationEntity[];

  @Field()
  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at: Date;

  @Field()
  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updated_at: Date;
}
