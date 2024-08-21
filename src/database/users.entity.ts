import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { PROFILES } from './profiles.entity';
import { POSTS } from './posts.entity';
import { USERS_GROUPS } from './user_groups';


@ObjectType() // Decorador para GraphQL
@Entity('USERS')
export class USERS {
  @Field(() => ID) // Decorador para GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // Decorador para GraphQL
  @Column()
  firstname: string;

  @Field() // Decorador para GraphQL
  @Column()
  lastname: string;

  @Field() // Decorador para GraphQL
  @Column()
  email: string;

  @Field() // Decorador para GraphQL
  @Column()
  create_at: string;

  @Field() // Decorador para GraphQL
  @Column()
  updated_at: string;

  @Field(() => PROFILES, { nullable: true })
  @OneToOne(() => PROFILES, (profile) => profile.user)
  profile: PROFILES;

  @Field(() => [POSTS]) // Decorator for GraphQL
  @OneToMany(() => POSTS, post => post.user) // Define OneToMany relationship
  posts: POSTS[]; 

  @Field(() => [USERS_GROUPS]) // Decorator for GraphQL
  @OneToMany(() => USERS_GROUPS, usersGroups => usersGroups.user) // One-to-Many relationship with USERS_GROUPS
  userGroups: USERS_GROUPS[];

}
