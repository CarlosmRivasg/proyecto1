import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { USERS } from 'src/database/users.entity';
import { CreateUserInput } from 'src/dto/users/created_user.input';
import { UpdateUserInput } from 'src/dto/users/update_user.input';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(USERS)
    private usersRepository: Repository<USERS>,
  ) {}

  async findAll(): Promise<USERS[]> {
    return this.usersRepository.find({ relations: ['profile', 'posts', 'userGroups'] });
  }

  async findOne(id: number): Promise<USERS> {
    return this.usersRepository.findOne({ where: { id }, relations: ['profile', 'posts', 'userGroups'] });
  }

  async create(createUserInput: CreateUserInput): Promise<USERS> {
    const newUser = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(newUser);
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<USERS> {
    await this.usersRepository.update(id, updateUserInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
