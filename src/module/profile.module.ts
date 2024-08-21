import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesService } from 'src/service/profile.service';
import { ProfilesResolver } from 'src/resolver/profile.resolver';
import { PROFILES } from 'src/database/profiles.entity';
import { USERS } from 'src/database/users.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([PROFILES, USERS]), // Asegúrate de que USERS está aquí
  ],
  providers: [ProfilesService, ProfilesResolver],
  exports: [ProfilesService],
})
export class ProfilesModule {}