import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import ConsultationEntity from './consultation.entity';
import RoleEntity from './role.entity';
import ServiceEntity from './service.entity';

@ObjectType()
@Entity('user')
class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  firstName: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  lastName: string;

  @Field()
  @Column({ type: 'char', nullable: false, length: 1 })
  gender: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 255, unique: true })
  email: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 255 })
  password: string;

  @Field()
  @Column({ type: 'boolean', nullable: false, default: false })
  isActivated: boolean;

  @ManyToOne(() => ServiceEntity, (service) => service.user, { nullable: false })
  @JoinColumn({ name: 'service_id' })
  service: ServiceEntity;

  @ManyToOne(() => RoleEntity, (role) => role.user, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.created_by)
  consultation: ConsultationEntity[];
}

export default UserEntity;
