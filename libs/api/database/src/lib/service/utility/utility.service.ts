import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginateOptions } from 'mongoose';

@Injectable()
export class UtilityService {
	private readonly _DEFAULT_PAGINATE_OPTIONS: PaginateOptions = this._configService.get('DEFAULT_PAGINATE_OPTIONS');

	constructor(private readonly _configService: ConfigService) {}

	setDefaultPaginationOptions(options: PaginateOptions = {}): PaginateOptions {
		options.limit = Number(options.limit) >= 1 ? Number(options.limit) : this._DEFAULT_PAGINATE_OPTIONS.limit;
		options.page = Number(options.page) >= 1 ? Number(options.page) : this._DEFAULT_PAGINATE_OPTIONS.page;
		return options;
	}
}
