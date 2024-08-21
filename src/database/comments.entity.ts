import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne} from 'typeorm';
import { POSTS } from './posts.entity';

@ObjectType() // Decorador para GraphQL
@Entity('COMMENTS')
export class COMMENTS {
  @Field(() => ID) // Decorador para GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // Decorador para GraphQL
  @Column()
  content: string;

  @Field()  // Decorador para GraphQL
  @Column()
  created_at: string; // peso

  @Field() // Decorador para GraphQL
  @Column()
  updated_at: string;

  @Field(() => POSTS) 
  @ManyToOne(() => POSTS, post => post.comments) 
  post: POSTS;

  //falta la relacion many to one con post
}
