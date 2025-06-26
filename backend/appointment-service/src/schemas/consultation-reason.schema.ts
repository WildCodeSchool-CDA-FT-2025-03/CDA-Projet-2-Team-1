import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class ConsultationReasonSchema {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
