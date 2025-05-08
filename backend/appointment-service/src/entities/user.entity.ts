import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import RoleEntity from './role.entity';

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

  @ManyToOne(() => RoleEntity, (role) => role.users, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;
}

export default UserEntity;
