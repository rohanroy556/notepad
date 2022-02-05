import { PaginateOptions } from 'mongoose';
import { join } from 'path';

export const NOTEPAD_BUILD_PATH = join(__dirname, '../notepad');
export const DEFAULT_PAGINATE_OPTIONS: PaginateOptions = {
	offset: 0,
	page: 1,
	limit: 25
};
