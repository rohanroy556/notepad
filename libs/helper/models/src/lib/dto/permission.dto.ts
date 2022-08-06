import { RulesLogic } from "json-logic-js";
import { FeatureType, ActionType } from "../enum";
import { Permission } from "../interface";

export class PermissionDto implements Permission {
	readonly feature!: FeatureType;
	readonly action!: ActionType;
	readonly condition!: RulesLogic;
}
