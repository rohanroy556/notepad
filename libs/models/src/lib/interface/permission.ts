import { ActionType, FeatureType } from "../enum";
import { RulesLogic } from 'json-logic-js';

export interface Permission {
	feature: FeatureType;
	action: ActionType;
	condition: RulesLogic;
}
