import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { User } from '../../schema';

@Injectable()
export class UserService {
	private readonly _DEFAULT_PAGINATE_OPTIONS: PaginateOptions = this._configService.get('DEFAULT_PAGINATE_OPTIONS');

	constructor(
		private readonly _configService: ConfigService,
		@InjectModel(User.name) private readonly _userModel: PaginateModel<User>,
	) {}

	create(userDto: UserDto): Promise<User> {
		const user = new this._userModel(userDto);
		return user.save();
	}

	update(id: string, userDto: UserDto): Promise<User> {
		return this._userModel.findByIdAndUpdate(id, { $set: userDto }).exec();
	}

	count(query: FilterQuery<User> = {}): Promise<number> {
		return this._userModel.countDocuments(query).exec();
	}

	find(query: FilterQuery<User> = {}, options: PaginateOptions = {}): Promise<PaginateResult<User>> {
		options.limit = Number(options.limit) >= 1 ? Number(options.limit) : this._DEFAULT_PAGINATE_OPTIONS.limit;
		options.page = Number(options.page) >= 1 ? Number(options.page) : this._DEFAULT_PAGINATE_OPTIONS.page;
		options.select = options.select || { password: 0, role: 0 };
		options.sort = options.sort || { name: 1 };
		return this._userModel.paginate(query, options);
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
