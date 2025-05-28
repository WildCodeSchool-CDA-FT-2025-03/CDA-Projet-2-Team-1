// src/inputs/create-user.input.ts
import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  firstname: string;

  @Field()
  email: string;
}
