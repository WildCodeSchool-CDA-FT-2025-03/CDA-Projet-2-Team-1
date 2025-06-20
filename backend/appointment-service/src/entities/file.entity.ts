import { Field, ObjectType, ArgsType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';
import ConsultationEntity from './consultation.entity';

@ArgsType()
export class GetFilesByConsultationIdArgs {
  @Field()
  @IsNotEmpty()
  @IsString()
  consultationId: string;
}

@ArgsType()
export class UploadFileArgs {
  @Field()
  @IsNotEmpty()
  @IsString()
  consultationId: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  path: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isConfidential?: boolean;
}

@ObjectType()
@Entity('file')
class FileEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 64 })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @Field()
  @Column({ type: 'varchar', nullable: false, length: 255 })
  @IsNotEmpty()
  @IsString()
  path: string;

  @Field()
  @Column({ type: 'boolean', nullable: false, default: false })
  @IsBoolean()
  is_confidential: boolean;

  @Field()
  @Column({ type: 'boolean', nullable: false, default: false })
  @IsBoolean()
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
