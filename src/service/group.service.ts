import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GROUPS } from 'src/database/groups.entity';
import { CreateGroupInput } from 'src/dto/groups/create-groups.input';
import { UpdatedGroupInput } from 'src/dto/groups/updated-groups.input';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GROUPS)
    private readonly groupsRepository: Repository<GROUPS>,
  ) {}

  async create(createGroupInput: CreateGroupInput): Promise<GROUPS> {
    const group = this.groupsRepository.create(createGroupInput);
    return this.groupsRepository.save(group);
  }

  async findAll(): Promise<GROUPS[]> {
    return this.groupsRepository.find({ relations: ['userGroups'] });
  }

 
    async findOne(id: number): Promise<GROUPS> {
        const group = await this.groupsRepository.findOne({
          where: { id },
          relations: ['userGroups'],
        });
        if (!group) {
          throw new NotFoundException(`Group with ID ${id} not found`);
        }
        return group;
      }
      

  async update(id: number, updateGroupInput: UpdatedGroupInput): Promise<GROUPS> {
    const group = await this.findOne(id);
    Object.assign(group, updateGroupInput);
    return this.groupsRepository.save(group);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.groupsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Group with ID ${id} not found`);
    }
    return true;
  }
}
