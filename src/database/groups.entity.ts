import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { USERS_GROUPS } from './user_groups';

@ObjectType() // Decorator for GraphQL
@Entity('GROUPS') // Remove the space before the table name
export class GROUPS {
  @Field(() => ID) // Decorator for GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // Decorator for GraphQL
  @Column()
  name: string; // Correct the variable name (case-sensitive)

  @Field() // Decorator for GraphQL
  @Column()
  description: string; // Changed from number to string, assuming description is a text field

  @Field() // Decorator for GraphQL
  @Column()
  created_at: string;

  @Field() // Decorator for GraphQL
  @Column()
  updated_at: string;

  @OneToMany(() => USERS_GROUPS, usersGroups => usersGroups.group)
  userGroups: USERS_GROUPS[];
}
