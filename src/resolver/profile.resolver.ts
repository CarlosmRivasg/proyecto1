import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ProfilesService } from 'src/service/profile.service';
import { PROFILES } from 'src/database/profiles.entity';
import { CreateProfileInput } from 'src/dto/profiles/created_profile.input';
import { UpdateProfileInput } from 'src/dto/profiles/update_profile.input';

@Resolver(() => PROFILES)
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  // Query to get all profiles
  @Query(() => [PROFILES], { name: 'profiles' })
  findAll() {
    return this.profilesService.findAll();
  }

  // Query to get a profile by ID
  @Query(() => PROFILES, { name: 'profile' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.profilesService.findOne(id);
  }

  // Mutation to create a new profile
  @Mutation(() => PROFILES)
  createProfile(@Args('createProfileInput') createProfileInput: CreateProfileInput) {
    return this.profilesService.create(createProfileInput);
  }

  // Mutation to update an existing profile
  @Mutation(() => PROFILES)
  updateProfile(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateProfileInput') updateProfileInput: UpdateProfileInput,
  ) {
    return this.profilesService.update(id, updateProfileInput);
  }

  // Mutation to remove a profile by ID
  @Mutation(() => Boolean)
  removeProfile(@Args('id', { type: () => ID }) id: number) {
    return this.profilesService.remove(id).then(() => true);
  }
}