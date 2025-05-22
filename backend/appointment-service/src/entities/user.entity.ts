import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import RestEntity from './rest.entity';
import ConsultationEntity from './consultation.entity';
import ServiceEntity from './service.entity';

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

  @Field(() => ServiceEntity, { nullable: false })
  @ManyToOne(() => ServiceEntity, (service) => service.user, { nullable: false })
  @JoinColumn({ name: 'service_id' })
  service: ServiceEntity;
}

export default UserEntity;
