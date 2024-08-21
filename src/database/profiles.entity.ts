import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { USERS } from './users.entity';

@ObjectType() // Decorador para GraphQL
@Entity('PROFILES')
export class PROFILES {
  @Field(() => ID) // Decorador para GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // Decorador para GraphQL
  @Column()
  date_of_birth: string;

  @Field() // Decorador para GraphQL
  @Column()
  biography: string;

  @Field() // Decorador para GraphQL
  @Column()
  created_at: string;

  @Field() // Decorador para GraphQL
  @Column()
  updated_at: string;

  @Field(() => USERS)
  @OneToOne(() => USERS, (user) => user.profile)
  @JoinColumn() // Esto crea la columna de clave foránea en la tabla 'PROFILES'
  user: USERS;
}
  //falta la relacion one to one con users
  

