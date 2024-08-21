import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { GroupsService } from 'src/service/group.service';
import { GROUPS } from 'src/database/groups.entity';
import { CreateGroupInput } from 'src/dto/groups/create-groups.input';
import { UpdatedGroupInput } from 'src/dto/groups/updated-groups.input';

@Resolver(() => GROUPS)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Query(() => [GROUPS], { name: 'groups' })
  findAll() {
    return this.groupsService.findAll();
  }

  @Query(() => GROUPS, { name: 'group' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.groupsService.findOne(id);
  }

  @Mutation(() => GROUPS)
  createGroup(@Args('createGroupInput') createGroupInput: CreateGroupInput) {
    return this.groupsService.create(createGroupInput);
  }

  @Mutation(() => GROUPS)
  updateGroup(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateGroupInput') updateGroupInput: UpdatedGroupInput,
  ) {
    return this.groupsService.update(id, updateGroupInput);
  }

  @Mutation(() => Boolean)
  removeGroup(@Args('id', { type: () => ID }) id: number) {
    return this.groupsService.remove(id).then(() => true);
  }
}
