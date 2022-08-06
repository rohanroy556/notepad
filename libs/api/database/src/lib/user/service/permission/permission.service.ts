import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { PermissionDto } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { Permission } from '../../schema';

@Injectable()
export class PermissionService {
	private readonly _DEFAULT_PAGINATE_OPTIONS: PaginateOptions = this._configService.get('DEFAULT_PAGINATE_OPTIONS');

	constructor(
		private readonly _configService: ConfigService,
		@InjectModel(Permission.name) private readonly _permissionModel: PaginateModel<Permission>,
	) {}

	create(permissionDto: PermissionDto): Promise<Permission> {
		const permission = new this._permissionModel(permissionDto);
		return permission.save();
	}

	update(id: string, permissionDto: PermissionDto): Promise<Permission> {
		return this._permissionModel.findByIdAndUpdate(id, { $set: permissionDto }).exec();
	}

	count(query: FilterQuery<Permission> = {}): Promise<number> {
		return this._permissionModel.countDocuments(query).exec();
	}

	find(query: FilterQuery<Permission> = {}, options: PaginateOptions = {}): Promise<PaginateResult<Permission>> {
		options.limit = Number(options.limit) >= 1 ? Number(options.limit) : this._DEFAULT_PAGINATE_OPTIONS.limit;
		options.page = Number(options.page) >= 1 ? Number(options.page) : this._DEFAULT_PAGINATE_OPTIONS.page;
		options.select = options.select || { condition: 0 };
		options.sort = options.sort || { feature: 1, action: 1 };
		return this._permissionModel.paginate(query, options);
	}

	findById(id: string): Promise<Permission> {
		return this._permissionModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._permissionModel.deleteOne({ id }).exec();
	}
}
