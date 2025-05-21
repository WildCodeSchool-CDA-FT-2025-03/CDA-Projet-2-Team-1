import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import RestEntity from './rest.entity';

@ObjectType()
@Entity('user')
class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => RestEntity, (rest) => rest.user)
  rest: RestEntity[];
}

export default UserEntity;
