import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { RoleDto } from '@notepad/models';
import { DeleteResult } from 'mongodb';
import { PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { Role } from '../../schema';

@Injectable()
export class RoleService {
	private readonly DEFAULT_PAGINATE_OPTIONS: PaginateOptions = this._configService.get('DEFAULT_PAGINATE_OPTIONS');

	constructor(
		private readonly _configService: ConfigService,
		@InjectModel(Role.name) private readonly _roleModel: PaginateModel<Role>,
	) {}

	create(roleDto: RoleDto): Promise<Role> {
		const role = new this._roleModel(roleDto);
		return role.save();
	}

	update(id: string, roleDto: RoleDto): Promise<Role> {
		return this._roleModel.findByIdAndUpdate(id, { $set: roleDto }).exec();
	}

	find(query = {}, options: PaginateOptions = {}): Promise<PaginateResult<Role>> {
		options.limit = Number(options.limit) >= 1 ? Number(options.limit) : this.DEFAULT_PAGINATE_OPTIONS.limit;
		options.page = Number(options.page) >= 1 ? Number(options.page) : this.DEFAULT_PAGINATE_OPTIONS.page;
		options.select = options.select || { permissions: 0 };
		options.sort = options.sort || { name: 1 };
		return this._roleModel.paginate(query, options);
	}

	findById(id: string): Promise<Role> {
		return this._roleModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._roleModel.deleteOne({ id }).exec();
	}
}
