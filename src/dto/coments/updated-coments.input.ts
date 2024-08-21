import { InputType, Field, ID, Int } from '@nestjs/graphql';


@InputType()
export class UpdatedCommentInput {
  @Field()
  
  content: string;
  @Field()

  created_at: string;

  @Field()
  updated_at: string;

  @Field(() => ID)
  postId: number; // Assuming you are setting the post through an ID
}
