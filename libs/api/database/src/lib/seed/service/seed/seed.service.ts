import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserSeedService } from '../user-seed/user-seed.service';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
	private readonly _ENABLE_DATABASE_SEED = this._configService.get<boolean>('DATABASE.ENABLE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _userSeedService: UserSeedService,
	) {}

	async onApplicationBootstrap() {
		if (this._ENABLE_DATABASE_SEED) {
			await this._userSeedService.seedUsers();
		}
	}
}
