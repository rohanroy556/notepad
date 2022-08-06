import { ActionType, FeatureType } from "../enum";
import { RulesLogic } from 'json-logic-js';

export interface Permission {
	_id?: string;
	feature: FeatureType;
	action: ActionType;
	condition: RulesLogic;
}
