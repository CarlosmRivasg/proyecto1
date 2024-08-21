import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { USERS_GROUPS } from 'src/database/user_groups';
import { USERS } from 'src/database/users.entity';
import { GROUPS } from 'src/database/groups.entity';

@Injectable()
export class UsersGroupsService {
  constructor(
    @InjectRepository(USERS_GROUPS)
    private usersGroupsRepository: Repository<USERS_GROUPS>,

    @InjectRepository(USERS)
    private usersRepository: Repository<USERS>,

    @InjectRepository(GROUPS)
    private groupsRepository: Repository<GROUPS>,
  ) {}

  async create(userId: number, groupId: number): Promise<USERS_GROUPS> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    const group = await this.groupsRepository.findOne({ where: { id: groupId } });

    if (!user || !group) {
      throw new NotFoundException('User or Group not found');
    }

    const userGroup = this.usersGroupsRepository.create({
      user,
      group,
    });

    return this.usersGroupsRepository.save(userGroup);
  }

  async findAll(): Promise<USERS_GROUPS[]> {
    return this.usersGroupsRepository.find({ relations: ['user', 'group'] });
  }

  async findOne(id: number): Promise<USERS_GROUPS> {
    const userGroup = await this.usersGroupsRepository.findOne({
      where: { id },
      relations: ['user', 'group'],
    });

    if (!userGroup) {
      throw new NotFoundException(`UserGroup with ID ${id} not found`);
    }

    return userGroup;
  }

  async remove(id: number): Promise<void> {
    const result = await this.usersGroupsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`UserGroup with ID ${id} not found`);
    }
  }
}
