import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '@notepad/models';
import { DeleteResult } from 'mongodb';
import { PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { User } from '../../schema';

@Injectable()
export class UserService {
	private readonly DEFAULT_PAGINATE_OPTIONS: PaginateOptions = this._configService.get('DEFAULT_PAGINATE_OPTIONS');

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

	find(query = {}, options: PaginateOptions = {}): Promise<PaginateResult<User>> {
		options.limit = Number(options.limit) >= 1 ? Number(options.limit) : this.DEFAULT_PAGINATE_OPTIONS.limit;
		options.page = Number(options.page) >= 1 ? Number(options.page) : this.DEFAULT_PAGINATE_OPTIONS.page;
		options.select = options.select || { password: 0, role: 0 };
		options.sort = options.sort || { name: 1 };
		return this._userModel.paginate(query, options);
	}

	findById(id: string): Promise<User> {
		return this._userModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._userModel.deleteOne({ id }).exec();
	}
}
