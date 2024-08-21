import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class UpdateProfileInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })

  date_of_birth?: string;

  @Field({ nullable: true })

  biography?: string;

  @Field({ nullable: true })

  created_at?: string;

  @Field({ nullable: true })

  updated_at?: string;

  @Field(() => ID, { nullable: true })
  userId?: number; // Optional ID of the associated user
}
