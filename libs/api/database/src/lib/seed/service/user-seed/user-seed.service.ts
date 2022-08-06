import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeed, RoleType, UserDto } from '@notepad-helper/models';
import { PermissionService, RoleService, UserService } from '../../../user';

@Injectable()
export class UserSeedService {
	private readonly _DATABASE_SEED: DatabaseSeed = this._configService.get('DATABASE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _permissionService: PermissionService,
		private readonly _roleService: RoleService,
		private readonly _userService: UserService,
	) {}

	async createAdminUser() {
		try {
			const role = await this._roleService.findByName(RoleType.ADMIN);
			if (!role || role.name !== RoleType.ADMIN) {
				throw new Error('No admin role exists');
			}
			const user = await this._userService.find({ $or: [{ role: role?._id }, { 'role.name': role?.name }, { 'role._id': role?._id }] });
			const hasUser = user.docs?.length > 0;
			if (!hasUser) {
				const seedUser: UserDto = {
					...this._DATABASE_SEED.users[0],
					role: role._id
				}
				await this._userService.create(seedUser);
			} else {
				console.log('User: Admin user already exists!');
			}

			console.log('User: Successfully created Admin user!');
		} catch (error) {
			console.error('User: Error creating Admin user', error);
		}
	}
}
