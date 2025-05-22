import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('role')
class RoleEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  name: string;
}

export default RoleEntity;
