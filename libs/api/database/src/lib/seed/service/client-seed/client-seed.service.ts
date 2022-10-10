import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeed } from '@notepad-helper/models';
import { ClientService } from '../../../client';

@Injectable()
export class ClientSeedService {
	private readonly _DATABASE_SEED: DatabaseSeed = this._configService.get('DATABASE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _clientService: ClientService,
	) {}

	async seedClients() {
		try {
			const seedClients = this._DATABASE_SEED.clients;
			for (const seedClient of seedClients) {
				const client = await this._clientService.findByName(seedClient.name);

				if (!client) {
					await this._clientService.create(seedClient);
					console.log(`Client: Successfully created client!`);
				} else {
					console.log('Client: Client already exists!');
				}
			}
		} catch (error) {
			console.error('Client: Error creating client', error);
		}
	}
}
