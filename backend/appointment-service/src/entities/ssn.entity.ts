import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('ssn')

class SsnEntity extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({type:'varchar', nullable: false, length: 15})
    number: string;
}

export default SsnEntity;