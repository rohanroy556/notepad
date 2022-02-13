import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeed, FeatureType, ActionType } from '@notepad/models';
import { PermissionService } from '../../../user';

@Injectable()
export class PermissionSeedService {
	private readonly _DATABASE_SEED: DatabaseSeed = this._configService.get('DATABASE_SEED');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _permissionService: PermissionService,
	) {}

	async createNoteFeaturePermissions() {
		try {
			const permissions = await this._permissionService.find({ feature: FeatureType.NOTE });
			const hasCreatePermission = permissions.docs.some(permission => permission.action === ActionType.CREATE);
			if (!hasCreatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.NOTE && permission.action === ActionType.CREATE
					)
				);
			} else {
				console.log('Note Feature: Create permission already exists!');
			}

			const hasUpdatePermission = permissions.docs.some(permission => permission.action === ActionType.UPDATE);
			if (!hasUpdatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.NOTE && permission.action === ActionType.UPDATE
					)
				);
			} else {
				console.log('Note Feature: Update permission already exists!');
			}

			const hasReadPermission = permissions.docs.some(permission => permission.action === ActionType.READ);
			if (!hasReadPermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.NOTE && permission.action === ActionType.READ
					)
				);
			} else {
				console.log('Note Feature: Read permission already exists!');
			}

			const hasDeletePermission = permissions.docs.some(permission => permission.action === ActionType.DELETE);
			if (!hasDeletePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.NOTE && permission.action === ActionType.DELETE
					)
				);
			} else {
				console.log('Note Feature: Delete permission already exists!');
			}

			console.log('Note Feature: Successfully created permissions!');
		} catch (error) {
			console.error('Note Feature: Error creating permissions', error);
		}
	}

	async createPermissionFeaturePermissions() {
		try {
			const permissions = await this._permissionService.find({ feature: FeatureType.PERMISSION });
			const hasCreatePermission = permissions.docs.some(permission => permission.action === ActionType.CREATE);
			if (!hasCreatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.PERMISSION && permission.action === ActionType.CREATE
					)
				);
			} else {
				console.log('Permission Feature: Create permission already exists!');
			}

			const hasUpdatePermission = permissions.docs.some(permission => permission.action === ActionType.UPDATE);
			if (!hasUpdatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.PERMISSION && permission.action === ActionType.UPDATE
					)
				);
			} else {
				console.log('Permission Feature: Update permission already exists!');
			}

			const hasReadPermission = permissions.docs.some(permission => permission.action === ActionType.READ);
			if (!hasReadPermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.PERMISSION && permission.action === ActionType.READ
					)
				);
			} else {
				console.log('Permission Feature: Read permission already exists!');
			}

			const hasDeletePermission = permissions.docs.some(permission => permission.action === ActionType.DELETE);
			if (!hasDeletePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.PERMISSION && permission.action === ActionType.DELETE
					)
				);
			} else {
				console.log('Permission Feature: Delete permission already exists!');
			}

			console.log('Permission Feature: Successfully created permissions!');
		} catch (error) {
			console.error('Permission Feature: Error creating permissions', error);
		}
	}

	async createRoleFeaturePermissions() {
		try {
			const permissions = await this._permissionService.find({ feature: FeatureType.ROLE });
			const hasCreatePermission = permissions.docs.some(permission => permission.action === ActionType.CREATE);
			if (!hasCreatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.ROLE && permission.action === ActionType.CREATE
					)
				);
			} else {
				console.log('Role Feature: Create permission already exists!');
			}

			const hasUpdatePermission = permissions.docs.some(permission => permission.action === ActionType.UPDATE);
			if (!hasUpdatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.ROLE && permission.action === ActionType.UPDATE
					)
				);
			} else {
				console.log('Role Feature: Update permission already exists!');
			}

			const hasReadPermission = permissions.docs.some(permission => permission.action === ActionType.READ);
			if (!hasReadPermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.ROLE && permission.action === ActionType.READ
					)
				);
			} else {
				console.log('Role Feature: Read permission already exists!');
			}

			const hasDeletePermission = permissions.docs.some(permission => permission.action === ActionType.DELETE);
			if (!hasDeletePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.ROLE && permission.action === ActionType.DELETE
					)
				);
			} else {
				console.log('Role Feature: Delete permission already exists!');
			}

			console.log('Role Feature: Successfully created permissions!');
		} catch (error) {
			console.error('Role Feature: Error creating permissions', error);
		}
	}

	async createUserFeaturePermissions() {
		try {
			const permissions = await this._permissionService.find({ feature: FeatureType.USER });
			const hasCreatePermission = permissions.docs.some(permission => permission.action === ActionType.CREATE);
			if (!hasCreatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.USER && permission.action === ActionType.CREATE
					)
				);
			} else {
				console.log('User Feature: Create permission already exists!');
			}

			const hasUpdatePermission = permissions.docs.some(permission => permission.action === ActionType.UPDATE);
			if (!hasUpdatePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.USER && permission.action === ActionType.UPDATE
					)
				);
			} else {
				console.log('User Feature: Update permission already exists!');
			}

			const hasReadPermission = permissions.docs.some(permission => permission.action === ActionType.READ);
			if (!hasReadPermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.USER && permission.action === ActionType.READ
					)
				);
			} else {
				console.log('User Feature: Read permission already exists!');
			}

			const hasDeletePermission = permissions.docs.some(permission => permission.action === ActionType.DELETE);
			if (!hasDeletePermission) {
				await this._permissionService.create(
					this._DATABASE_SEED.permissions.find(
						permission => permission.feature === FeatureType.USER && permission.action === ActionType.DELETE
					)
				);
			} else {
				console.log('User Feature: Delete permission already exists!');
			}

			console.log('User Feature: Successfully created permissions!');
		} catch (error) {
			console.error('User Feature: Error creating permissions', error);
		}
	}
}
