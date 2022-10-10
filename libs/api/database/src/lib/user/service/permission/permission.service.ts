import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { ActionType, PermissionDto, ResourceType } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { UtilityService } from '../../../service';
import { Permission } from '../../schema';
import { UserService } from '../user/user.service';

@Injectable()
export class PermissionService {
	constructor(
		@InjectModel(Permission.name) private readonly _permissionModel: PaginateModel<Permission>,
		private readonly _userService: UserService,
		private readonly _utilityService: UtilityService,
	) {}

	async create(permissionDto: PermissionDto, userId: string): Promise<Permission> {
		const user = await this._userService.findById(userId);
		if (!user) {
			throw new BadRequestException();
		}

		const permission = new this._permissionModel(permissionDto);
		permission.createdBy = user._id;
		permission.updatedBy = user._id;
		return permission.save();
	}

	addResourceCreator(resourceId: string, resourceType: ResourceType, userId: string): Promise<Permission> {
		const permissionDto: PermissionDto = {
			actions: [ActionType.CREATE, ActionType.DELETE, ActionType.READ, ActionType.UPDATE],
			resourceId,
			resourceType,
			userId,
		};
		return this.create(permissionDto, userId);
	}

	async update(id: string, permissionDto: PermissionDto, userId: string): Promise<Permission> {
		const user = await this._userService.findById(userId);
		if (!user) {
			throw new BadRequestException();
		}

		return this._permissionModel.findByIdAndUpdate(id, { $set: { ...permissionDto, updatedBy: user._id } }).exec();
	}

	count(query: FilterQuery<Permission> = {}): Promise<number> {
		return this._permissionModel.countDocuments(query).exec();
	}

	find(query: FilterQuery<Permission> = {}, options: PaginateOptions = {}): Promise<PaginateResult<Permission>> {
		options = this._utilityService.setDefaultPaginationOptions(options);
		return this._permissionModel.paginate(query, options);
	}

	findOne(query: FilterQuery<Permission> = {}): Promise<Permission> {
		return this._permissionModel.findOne(query).exec();
	}

	findById(id: string): Promise<Permission> {
		return this._permissionModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._permissionModel.deleteOne({ id }).exec();
	}
}
