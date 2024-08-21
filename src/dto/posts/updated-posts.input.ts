import { InputType, Field, ID, Int } from '@nestjs/graphql';


@InputType()
export class UpdatedPostInput {
  @Field()
  
  title: string;

  @Field()
  
  content: string;

  @Field()

  created_at: string;

  @Field()

  updated_at: string;

  @Field(() => ID)
  userId: number; // Assuming you are setting the user through an ID
}
