import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateGroupInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;
}
