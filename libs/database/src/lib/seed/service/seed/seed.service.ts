import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
	onApplicationBootstrap() {
		console.log('Application Bootstrap');
	}
}
