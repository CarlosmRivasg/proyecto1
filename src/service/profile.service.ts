import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PROFILES } from 'src/database/profiles.entity';
import { CreateProfileInput } from 'src/dto/profiles/created_profile.input';
import { UpdateProfileInput } from 'src/dto/profiles/update_profile.input';
import { USERS } from 'src/database/users.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(PROFILES)
    private profilesRepository: Repository<PROFILES>,

    @InjectRepository(USERS)
    private userRepository: Repository<USERS> // Correctly inject USERS repository
  ) {}

  // Create a new profile
  async create(createProfileInput: CreateProfileInput): Promise<PROFILES> {
    const user = await this.userRepository.findOneBy({
      id: createProfileInput.userId
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const profile = this.profilesRepository.create({
      ...createProfileInput,
      user,
    });

    return this.profilesRepository.save(profile);
  }

  // Update an existing profile
  async update(id: number, updateProfileInput: UpdateProfileInput): Promise<PROFILES> {
    const profile = await this.profilesRepository.preload({
      id,
      ...updateProfileInput,
    });

    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return this.profilesRepository.save(profile);
  }

  // Remove a profile
  async remove(id: number): Promise<void> {
    const result = await this.profilesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
  }
  // Find all profiles
  async findAll(): Promise<PROFILES[]> {
    return this.profilesRepository.find();
  }

  // Find a profile by ID
  async findOne(id: number): Promise<PROFILES> {
    const profile = await this.profilesRepository.findOne({ where: { id } });
    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return profile;
  }

  
}