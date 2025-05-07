import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('patient')
class PatientEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  firstname: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  lastname: string;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  birthdate: Date;

  @Field()
  @Column({ type: 'char', nullable: false, length: 1 })
  gender: string;
}

export default PatientEntity;
