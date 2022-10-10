import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from '../client';
import { NoteModule } from '../note';
import { UserModule } from '../user';
import { ClientSeedService, SeedService, UserSeedService } from './service';

@Module({
	imports: [ClientModule, ConfigModule, NoteModule, UserModule],
	providers: [ClientSeedService, SeedService, UserSeedService]
})
export class SeedModule {}
