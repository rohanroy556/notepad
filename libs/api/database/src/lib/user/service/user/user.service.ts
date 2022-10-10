import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceType, UserDto } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { UtilityService } from '../../../service';
import { User } from '../../schema';
import { PermissionService } from '../permission/permission.service';

@Injectable()
export class UserService {
	constructor(
		private readonly _permissionService: PermissionService,
		@InjectModel(User.name) private readonly _userModel: PaginateModel<User>,
		private readonly _utilityService: UtilityService,
	) {}

	async create(userDto: UserDto, userId?: string): Promise<User> {
		const updatedByUser = userId ? (await this.findById(userId)) : null;
		const user = new this._userModel(userDto);
		user.createdBy = updatedByUser?._id ?? user._id;
		user.updatedBy = updatedByUser?._id ?? user._id;

		const newUser = await user.save();
		if (newUser) {
			await this._permissionService.addResourceCreator(newUser._id, ResourceType.USER, newUser._id);
		}
		if (updatedByUser && newUser._id !== updatedByUser._id) {
			await this._permissionService.addResourceCreator(newUser._id, ResourceType.USER, updatedByUser._id);
		}
		return newUser;
	}

	async update(id: string, userDto: UserDto, userId: string): Promise<User> {
		const updatedByUser = await this.findById(userId);
		if (!updatedByUser) {
			throw new BadRequestException();
		}

		return this._userModel.findByIdAndUpdate(id, { $set: { ...userDto, updatedBy: updatedByUser._id } }).exec();
	}

	count(query: FilterQuery<User> = {}): Promise<number> {
		return this._userModel.countDocuments(query).exec();
	}

	find(query: FilterQuery<User> = {}, options: PaginateOptions = {}): Promise<PaginateResult<User>> {
		options = this._utilityService.setDefaultPaginationOptions(options);
		options.select = options.select || { password: 0, role: 0 };
		options.sort = options.sort || { name: 1 };
		return this._userModel.paginate(query, options);
	}

	findOne(query: FilterQuery<User> = {}): Promise<User> {
		return this._userModel.findOne(query).exec();
	}

	findByEmail(email: string): Promise<User> {
		return this._userModel.findOne({ email }).exec();
	}

	findById(id: string): Promise<User> {
		return this._userModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._userModel.deleteOne({ id }).exec();
	}
}
