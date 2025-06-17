import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ConsultationEntity from './consultation.entity';

@ObjectType()
@Entity('file')
class FileEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  name: string;

  @Field()
  @Column({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 255 })
  path: string;

  @Field()
  @Column({ type: 'boolean', nullable: false, default: false })
  is_confidential: boolean;

  @Field()
  @Column({ type: 'boolean', nullable: false, default: false })
  is_deleted: boolean;

  @Field(() => ConsultationEntity)
  @ManyToOne(() => ConsultationEntity, (consultation) => consultation.files, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'consultation_id' })
  consultation: ConsultationEntity;
}

export default FileEntity;
