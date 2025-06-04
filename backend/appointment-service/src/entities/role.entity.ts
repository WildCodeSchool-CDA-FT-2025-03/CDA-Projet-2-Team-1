import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import UserEntity from './user.entity';

@ObjectType()
@Entity('role')
class RoleEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 64, unique: true, nullable: false })
  name: string;

  @OneToMany(() => UserEntity, (user) => user.role)
  user: UserEntity[];
}

export default RoleEntity;
