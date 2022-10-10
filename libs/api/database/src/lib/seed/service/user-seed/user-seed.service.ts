import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeed, RoleType } from '@notepad-helper/models';
import { UserService } from '../../../user';

@Injectable()
export class UserSeedService {
	private readonly _DATABASE_SEED: DatabaseSeed = this._configService.get('DATABASE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _userService: UserService,
	) {}

	async seedUsers() {
		try {
			const seedUsers = this._DATABASE_SEED.users;
			for (const seedUser of seedUsers) {
				const user = await this._userService.findByEmail(seedUser.email);

				if (!!user) {
					const systemUser = await this._userService.findOne({ role: RoleType.SYSTEM });
					await this._userService.create(seedUser, systemUser?._id);
					console.log(`User: Successfully created ${ seedUser.role } user!`);
				} else {
					console.log('User: Admin user already exists!');
				}
			}
		} catch (error) {
			console.error('User: Error creating Admin user', error);
		}
	}
}
