import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import RoleEntity from './role.entity';
import ServiceEntity from './service.entity';
import ConsultationEntity from './consultation.entity';

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
  @Column({ type: 'varchar', nullable: false, length: 255, unique: true })
  email: string;

  @Field()
  @Column({ type: 'char', nullable: false, length: 1 })
  gender: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 255 })
  password: string;

  @Field()
  @Column({ type: 'boolean', nullable: false, default: false })
  isActive: boolean;

  @ManyToOne(() => RoleEntity, (role) => role.user, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @ManyToOne(() => ServiceEntity, (service) => service.user, { nullable: false })
  @JoinColumn({ name: 'service_id' })
  service: ServiceEntity;

  @ManyToMany(() => ConsultationEntity, (consultation) => consultation.user)
  @JoinTable({ name: 'user_consultation' })
  consultation: ConsultationEntity;
}

export default UserEntity;
