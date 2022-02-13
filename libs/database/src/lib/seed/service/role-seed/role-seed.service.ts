import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeed, RoleDto, RoleType } from '@notepad/models';
import { PermissionService, RoleService } from '../../../user';

@Injectable()
export class RoleSeedService {
	private readonly _DATABASE_SEED: DatabaseSeed = this._configService.get('DATABASE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _permissionService: PermissionService,
		private readonly _roleService: RoleService,
	) {}

	async createAdminRole() {
		try {
			const role = await this._roleService.findByName(RoleType.ADMIN);
			const permissionCount = await this._permissionService.count();
			const permissions = await this._permissionService.find({}, { page: 1, limit: permissionCount });
			const hasRole = role?.name === RoleType.ADMIN;
			if (permissions.docs?.length === 0) {
				throw new Error('No permissions exists');
			}
			if (!hasRole) {
				const seedRole: RoleDto = {
					...this._DATABASE_SEED.roles.find(role => role.name === RoleType.ADMIN),
					permissions: permissions.docs.filter(permission => !!permission._id).map(permission => String(permission._id))
				};
				await this._roleService.create(seedRole);
			} else {
				console.log('Role: Admin role already exists!');
			}

			console.log('Role: Successfully created role!');
		} catch (error) {
			console.error('Role: Error creating role', error);
		}
	}

	async createUserRole() {
		try {
			const role = await this._roleService.findByName(RoleType.USER);
			const permissionCount = await this._permissionService.count();
			const permissions = await this._permissionService.find({}, { page: 1, limit: permissionCount, select: {} });
			const hasRole = role?.name === RoleType.USER;
			if (permissions.docs?.length === 0) {
				throw new Error('No permissions exists');
			}
			if (!hasRole) {
				const seedRole: RoleDto = {
					...this._DATABASE_SEED.roles.find(role => role.name === RoleType.USER),
					permissions: permissions.docs.filter(
						permission => !!permission._id && !JSON.stringify(permission.condition).includes(RoleType.ADMIN)
					).map(permission => String(permission._id))
				};
				await this._roleService.create(seedRole);
			} else {
				console.log('Role: User role already exists!');
			}

			console.log('Role: Successfully created role!');
		} catch (error) {
			console.error('Role: Error creating role', error);
		}
	}
}
