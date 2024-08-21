import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from 'src/service/comments.service';
import { CommentsResolver } from 'src/resolver/comments.resolver';
import { COMMENTS } from 'src/database/comments.entity';
import { POSTS } from 'src/database/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([COMMENTS, POSTS])],
  providers: [CommentsService, CommentsResolver],
})
export class CommentsModule {}
