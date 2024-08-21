import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USERS_GROUPS } from 'src/database/user_groups';
import { USERS } from 'src/database/users.entity';
import { GROUPS } from 'src/database/groups.entity';
import { UsersGroupsResolver } from 'src/resolver/user-groups.resolver';
import { UsersGroupsService } from 'src/service/user-groups.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([USERS_GROUPS, USERS, GROUPS]), // Importar las entidades aquí
  ],
  providers: [
    UsersGroupsService, // Registrar el servicio
    UsersGroupsResolver, // Registrar el resolver
  ],
  exports: [UsersGroupsService], // Exportar el servicio si se necesita en otros módulos
})
export class UsersGroupsModule {}
