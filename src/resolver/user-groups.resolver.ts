import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsersGroupsService } from 'src/service/user-groups.service';
import { USERS_GROUPS } from 'src/database/user_groups';

@Resolver(() => USERS_GROUPS)
export class UsersGroupsResolver {
  constructor(private readonly usersGroupsService: UsersGroupsService) {}

  @Query(() => [USERS_GROUPS], { name: 'userGroups' })
  findAll() {
    return this.usersGroupsService.findAll();
  }

  @Query(() => USERS_GROUPS, { name: 'userGroup' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.usersGroupsService.findOne(id);
  }

  @Mutation(() => USERS_GROUPS)
  createUserGroup(
    @Args('userId', { type: () => ID }) userId: number,
    @Args('groupId', { type: () => ID }) groupId: number,
  ) {
    return this.usersGroupsService.create(userId, groupId);
  }

  @Mutation(() => Boolean)
  removeUserGroup(@Args('id', { type: () => ID }) id: number) {
    return this.usersGroupsService.remove(id).then(() => true);
  }
}
