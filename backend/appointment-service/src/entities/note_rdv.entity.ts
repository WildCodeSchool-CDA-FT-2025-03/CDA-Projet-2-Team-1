import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('note_rdv')
class NoteRdvEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', nullable: true, length: 512 })
  text: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  update_at: Date;
}

export default NoteRdvEntity;
