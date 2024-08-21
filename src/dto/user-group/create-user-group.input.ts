import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserGropInput {
  @Field()
  user: string;

  @Field()
  group: string;

 
}
