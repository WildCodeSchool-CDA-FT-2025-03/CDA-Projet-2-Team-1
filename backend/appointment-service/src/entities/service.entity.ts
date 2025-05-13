import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import UserEntity from './user.entity';

@ObjectType()
@Entity('service')
class ServiceEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  name: string;

  @OneToMany(() => UserEntity, (user) => user.service)
  user: UserEntity[];
}

export default ServiceEntity;
