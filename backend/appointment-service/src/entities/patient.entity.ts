import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@ObjectType()
@Entity('patient')
class PatientEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({type: 'varchar', nullable: false, length: 64})
  firstname: string;

  @Field()
  @Column({type: 'varchar', nullable: false, length: 64})
  lastname: string;

  @Field()
  @Column({type: 'timestamp', nullable: false, length: 64})
  birthdate: Timestamp;

  @Field()
  @Column({type: 'number', nullable: false, length: 1})
  gender: number;
}

export default PatientEntity;
