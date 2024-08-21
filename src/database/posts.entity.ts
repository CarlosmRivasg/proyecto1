import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany } from 'typeorm';
import { USERS } from './users.entity';
import { COMMENTS } from './comments.entity';

@ObjectType() // Decorador para GraphQL
@Entity('POSTS')
export class POSTS {
  @Field(() => ID) 
  @PrimaryGeneratedColumn()
  id: number;

  @Field() 
  @Column()
  title: string;

  @Field() 
  @Column()
  content: string;

  @Field() 
  @Column()
  created_at: string;

  @Field() 
  @Column()
  updated_at: string;


  @Field(() => USERS) 
  @ManyToOne(() => USERS, user => user.posts) 
  user: USERS;


  @Field(() => [COMMENTS]) // Decorator for GraphQL
  @OneToMany(() => COMMENTS, comment => comment.post) // Define OneToMany relationship
  comments: COMMENTS[]; 
}