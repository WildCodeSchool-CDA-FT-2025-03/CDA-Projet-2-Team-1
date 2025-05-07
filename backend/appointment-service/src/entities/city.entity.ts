import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('city')
class CityEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64})
  name: string;

  @Field()
  @Column({ type:'varchar', nullable: false, length: 16})
  zip_code: string;
}

export default CityEntity;