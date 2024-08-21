import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class UpdatedGroupInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;
}
