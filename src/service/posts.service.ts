import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { POSTS } from 'src/database/posts.entity';
import { USERS } from 'src/database/users.entity';
import { CreatePostInput } from 'src/dto/posts/created-posts.input';
import { UpdatedPostInput } from 'src/dto/posts/updated-posts.input';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(POSTS)
    private postsRepository: Repository<POSTS>,

    @InjectRepository(USERS)
    private usersRepository: Repository<USERS>,
  ) {}

  async findAll(): Promise<POSTS[]> {
    return this.postsRepository.find({ relations: ['user', 'comments'] });
  }

  async findOne(id: number): Promise<POSTS> {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ['user', 'comments'],
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async create(createPostInput: CreatePostInput): Promise<POSTS> {
    const user = await this.usersRepository.findOneBy({ id: createPostInput.userId });
    if (!user) {
      throw new NotFoundException(`User with ID ${createPostInput.userId} not found`);
    }

    const post = this.postsRepository.create({
      ...createPostInput,
      user,
    });

    return this.postsRepository.save(post);
  }

  async update(id: number, updatePostInput: UpdatedPostInput): Promise<POSTS> {
    const post = await this.findOne(id);
    const user = updatePostInput.userId ? await this.usersRepository.findOneBy({ id: updatePostInput.userId }) : post.user;

    if (updatePostInput.userId && !user) {
      throw new NotFoundException(`User with ID ${updatePostInput.userId} not found`);
    }

    const updatedPost = Object.assign(post, updatePostInput, { user });

    return this.postsRepository.save(updatedPost);
  }

  async remove(id: number): Promise<void> {
    const post = await this.findOne(id);
    await this.postsRepository.remove(post);
  }
}
