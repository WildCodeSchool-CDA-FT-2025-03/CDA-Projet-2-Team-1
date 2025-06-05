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

import ConsultationEntity from './consultation.entity';
import RestEntity from './rest.entity';
import { Service } from './Service';

@ObjectType()
@Entity('user')
class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  lastname: string;

  @OneToMany(() => RestEntity, (rest) => rest.user)
  rest: RestEntity[];

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.doctor)
  consultation: ConsultationEntity[];

  @Field(() => Service, { nullable: false })
  @ManyToOne(() => Service, (service) => service.doctors, { nullable: false })
  @JoinColumn({ name: 'service_id' })
  service: Service;

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

export default UserEntity;
