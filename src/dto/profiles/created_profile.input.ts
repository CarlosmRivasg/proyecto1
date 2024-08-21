import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class CreateProfileInput {
  @Field()

  date_of_birth: string;

  @Field()

  biography: string;

  @Field()
  
  created_at: string;

  @Field()
 
  updated_at: string;

  @Field(() => ID)
  userId: number; // ID of the associated user
}
