import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NoteModule } from '../note';
import { UserModule } from '../user';
import { PermissionSeedService, RoleSeedService, SeedService, UserSeedService } from './service';

@Module({
	imports: [ConfigModule, NoteModule, UserModule],
	providers: [PermissionSeedService, RoleSeedService, SeedService, UserSeedService]
})
export class SeedModule {}
