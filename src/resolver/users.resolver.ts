
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsersService } from 'src/service/users.service';
import { USERS } from 'src/database/users.entity';
import { CreateUserInput } from 'src/dto/users/created_user.input';
import { UpdateUserInput } from 'src/dto/users/update_user.input';

@Resolver(() => USERS)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [USERS], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => USERS, { name: 'user' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => USERS)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => USERS)
  updateUser(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.remove(id).then(() => true);
  }
}
