import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('consultation')
class ConsultationEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'timestamp', nullable: false })
  date: Date;

  @Field()
  @Column({ type: 'time', nullable: false })
  date_time: Date;
}

export default ConsultationEntity;
