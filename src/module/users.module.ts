import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UsersService } from 'src/service/users.service';
import { UsersResolver } from 'src/resolver/users.resolver';
import { USERS } from 'src/database/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([USERS])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
