import { ACTIONS, FEATURES, NOTEPAD_BUILD_PATH } from './constant';
import { DatabaseConnection } from './database-connection';

export default () => Object.freeze({
	NOTEPAD_BUILD_PATH,
	ACTIONS,
	FEATURES,
	DATABASE: DatabaseConnection
});
