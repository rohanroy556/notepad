import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeed } from '@notepad/models';
import { PermissionService, RoleService } from '../../../user';

@Injectable()
export class RoleSeedService {
	private readonly _DATABASE_SEED: DatabaseSeed = this._configService.get('DATABASE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _permissionService: PermissionService,
		private readonly _roleService: RoleService,
	) {}
}
