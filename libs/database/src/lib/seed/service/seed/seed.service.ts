import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeed } from '@notepad/models';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
	private readonly _DATABASE_SEED: DatabaseSeed = this._configService.get('DATABASE_SEED');

	constructor(
		private readonly _configService: ConfigService,
	) {}

	onApplicationBootstrap() {
		console.log('Application Bootstrap');
	}
}
