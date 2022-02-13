import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PermissionSeedService } from '../permission-seed/permission-seed.service';
import { RoleSeedService } from '../role-seed/role-seed.service';
import { UserSeedService } from '../user-seed/user-seed.service';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
	private readonly _ENABLE_DATABASE_SEED = this._configService.get<boolean>('DATABASE.ENABLE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _permissionSeedService: PermissionSeedService,
		private readonly _roleSeedService: RoleSeedService,
		private readonly _userSeedService: UserSeedService,
	) {}

	async onApplicationBootstrap() {
		if (this._ENABLE_DATABASE_SEED) {
			await Promise.all([
				this._permissionSeedService.createNoteFeaturePermissions(),
				this._permissionSeedService.createPermissionFeaturePermissions(),
				this._permissionSeedService.createRoleFeaturePermissions(),
				this._permissionSeedService.createUserFeaturePermissions(),
			]);

			await Promise.all([
				this._roleSeedService.createAdminRole(),
				this._roleSeedService.createUserRole()
			]);

			await Promise.all([
				this._userSeedService.createAdminUser()
			]);
		}
	}
}
