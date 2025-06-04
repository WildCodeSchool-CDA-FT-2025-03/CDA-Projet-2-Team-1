import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import RestEntity from './rest.entity';
import ConsultationEntity from './consultation.entity';
import ServiceEntity from './service.entity';
import RoleEntity from './role.entity';

@ObjectType()
@Entity('user')
class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 64, nullable: false })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', length: 64, nullable: false })
  lastname: string;

  @Field()
  @Column({ type: 'char', length: 1, nullable: false })
  genre: string;

  @Field()
  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  // Pas exposé à GraphQL
  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Field()
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Field(() => ServiceEntity, { nullable: true })
  @ManyToOne(() => ServiceEntity, (service) => service.user, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'service_id' })
  service: ServiceEntity;

  @Field(() => RoleEntity, { nullable: true })
  @ManyToOne(() => RoleEntity, (role) => role.user, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToMany(() => RestEntity, (rest) => rest.user)
  rest: RestEntity[];

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.doctor)
  consultation: ConsultationEntity[];
}

export default UserEntity;
