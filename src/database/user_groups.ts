import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { USERS } from './users.entity';
import { GROUPS } from './groups.entity';



@ObjectType() // Decorator for GraphQL
@Entity('USERS_GROUPS')
export class USERS_GROUPS {
  @Field(() => ID) // Decorator for GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => USERS) // Decorator for GraphQL
  @ManyToOne(() => USERS, user => user.userGroups)
  user: USERS;

  @Field(() => GROUPS) // Decorator for GraphQL
  @ManyToOne(() => GROUPS, group => group.userGroups)
  group: GROUPS;
}
