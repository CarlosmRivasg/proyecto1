import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { COMMENTS } from 'src/database/comments.entity';
import { CreateCommentInput } from './../dto/coments/create-coments.input';
import { UpdatedCommentInput } from 'src/dto/coments/updated-coments.input';
import { POSTS } from 'src/database/posts.entity';


@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(COMMENTS)
    private commentsRepository: Repository<COMMENTS>,

    @InjectRepository(POSTS)
    private postsRepository: Repository<POSTS>,
  ) {}

  // Create a new comment
  async create(createCommentInput: CreateCommentInput): Promise<COMMENTS> {
    const post = await this.postsRepository.findOne({
      where: { id: createCommentInput.postId }, // Use 'where' to specify the condition
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${createCommentInput.postId} not found`);
    }

    const comment = this.commentsRepository.create({
      ...createCommentInput,
      post,
    });

    return this.commentsRepository.save(comment);
  }

  // Find all comments
  async findAll(): Promise<COMMENTS[]> {
    return this.commentsRepository.find({ relations: ['post'] });
  }

  // Find one comment by ID
  async findOne(id: number): Promise<COMMENTS> {
    const comment = await this.commentsRepository.findOne({
      where: { id },
      relations: ['post'],
    });
    
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    return comment;
  }

  // Update a comment by ID
  async update(id: number, updateCommentInput: UpdatedCommentInput): Promise<COMMENTS> {
    const comment = await this.commentsRepository.preload({
      id,
      ...updateCommentInput,
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    return this.commentsRepository.save(comment);
  }

  // Delete a comment by ID
  async remove(id: number): Promise<void> {
    const result = await this.commentsRepository.delete(id);
    
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
  }
}
