import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POSTS } from 'src/database/posts.entity';
import { USERS } from 'src/database/users.entity';
import { PostsService } from 'src/service/posts.service';
import { PostsResolver } from 'src/resolver/posts.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([POSTS, USERS]), // Asegúrate de que USERS está incluido
  ],
  providers: [PostsService, PostsResolver],
  exports: [PostsService],
})
export class PostsModule {}
