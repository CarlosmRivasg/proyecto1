import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PostsService } from 'src/service/posts.service';
import { POSTS } from 'src/database/posts.entity';
import { CreatePostInput } from 'src/dto/posts/created-posts.input';
import { UpdatedPostInput } from 'src/dto/posts/updated-posts.input';

@Resolver(() => POSTS)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [POSTS], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => POSTS, { name: 'post' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => POSTS)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Mutation(() => POSTS)
  updatePost(
    @Args('id', { type: () => ID }) id: number,
    @Args('updatePostInput') updatePostInput: UpdatedPostInput,
  ) {
    return this.postsService.update(id, updatePostInput);
  }

  @Mutation(() => Boolean)
  removePost(@Args('id', { type: () => ID }) id: number) {
    return this.postsService.remove(id).then(() => true);
  }
}
