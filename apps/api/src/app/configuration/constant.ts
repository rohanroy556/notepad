import { ActionType, FeatureType } from '@notepad/models';
import { join } from 'path';

function toArray<T>(obj: T): string[] {
	return Object.keys(obj).filter(key => !isNaN(Number(key))).map(key => obj[key]);
}

export const NOTEPAD_BUILD_PATH = join(__dirname, '../notepad');
export const ACTIONS = toArray(ActionType);
export const FEATURES = toArray(FeatureType);
