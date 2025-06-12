import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import UserEntity from './user.entity';

@ObjectType()
@Entity('service')
class ServiceEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 500, nullable: true })
  description?: string;

  @Field({ name: 'isActive' })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Field({ name: 'createdAt' })
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @Field({ name: 'updatedAt' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;

  @Field(() => [UserEntity])
  @OneToMany(() => UserEntity, (user) => user.service)
  user: UserEntity[];

  // Alias pour les docteurs (utilisateurs avec role médecin)
  @Field(() => [UserEntity], { name: 'doctors' })
  get doctors(): UserEntity[] {
    return this.user?.filter((user) => user.role?.name === 'médecin') || [];
  }
}

export default ServiceEntity;
