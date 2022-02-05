import { DEFAULT_PAGINATE_OPTIONS, NOTEPAD_BUILD_PATH } from './constant';
import { DatabaseConnection } from './database-connection';

export default () => Object.freeze({
	NOTEPAD_BUILD_PATH,
	DEFAULT_PAGINATE_OPTIONS,
	DATABASE: DatabaseConnection
});
