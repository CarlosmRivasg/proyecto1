import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CommentsService } from 'src/service/comments.service';
import { COMMENTS } from 'src/database/comments.entity';
import { CreateCommentInput } from './../dto/coments/create-coments.input';
import { UpdatedCommentInput } from 'src/dto/coments/updated-coments.input';

@Resolver(() => COMMENTS)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Query(() => [COMMENTS], { name: 'comments' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Query(() => COMMENTS, { name: 'comment' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => COMMENTS)
  createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentsService.create(createCommentInput);
  }

  @Mutation(() => COMMENTS)
  updateComment(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateCommentInput') updateCommentInput: UpdatedCommentInput,
  ) {
    return this.commentsService.update(id, updateCommentInput);
  }

  @Mutation(() => Boolean)
  removeComment(@Args('id', { type: () => ID }) id: number) {
    return this.commentsService.remove(id).then(() => true);
  }
}
