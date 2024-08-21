import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './module/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { USERS } from './database/users.entity';
import { USERS_GROUPS } from './database/user_groups';
import { COMMENTS } from './database/comments.entity';
import { GROUPS } from './database/groups.entity';
import { POSTS } from './database/posts.entity';
import { PROFILES } from './database/profiles.entity';
import { ProfilesModule } from './module/profile.module';
import { PostsModule } from './module/posts.module';
import { GroupsModule } from './module/group.module';
import { UsersGroupsModule } from './module/user-groups.module';
import { CommentsModule } from './module/comments.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'USERS',
      entities: [USERS, USERS_GROUPS, COMMENTS, GROUPS, POSTS, PROFILES  ],
      synchronize: true,
    }),
    UsersModule,
    ProfilesModule, 
    PostsModule,
    GroupsModule, UsersGroupsModule, CommentsModule
  ],
})
export class AppModule {}
