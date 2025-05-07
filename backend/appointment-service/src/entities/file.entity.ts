import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
  @UpdateDateColumn({ type: 'timestamp with time zone', nullable: false })
  created_at: Date;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  path: string;
}

export default FileEntity;
