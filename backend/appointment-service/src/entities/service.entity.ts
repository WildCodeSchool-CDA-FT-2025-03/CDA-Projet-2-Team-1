import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import UserEntity from './user.entity';

@ObjectType()
@Entity('service')
class ServiceEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 64, nullable: false, unique: true })
  name: string;

  @Field(() => [UserEntity])
  @OneToMany(() => UserEntity, (user) => user.service)
  user: UserEntity[];
}

export default ServiceEntity;
