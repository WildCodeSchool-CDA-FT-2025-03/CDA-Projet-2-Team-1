import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import RestEntity from './rest.entity';
import ConsultationEntity from './consultation.entity';

@ObjectType()
@Entity('user')
class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => RestEntity, (rest) => rest.user)
  rest: RestEntity[];

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.doctor)
  consultation: ConsultationEntity[];
}

export default UserEntity;
