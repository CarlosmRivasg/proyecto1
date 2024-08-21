import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GROUPS } from 'src/database/groups.entity';
import { GroupsService } from 'src/service/group.service';
import { GroupsResolver } from 'src/resolver/group.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([GROUPS])],
  providers: [GroupsService, GroupsResolver],
  exports: [GroupsService],
})
export class GroupsModule {}
