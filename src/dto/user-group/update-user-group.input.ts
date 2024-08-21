import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatedUserGropInput {
  @Field()
  user: string;

  @Field()
  group: string;

 
}
