import { ActionType, FeatureType } from "../enum";

export interface Permission {
	feature: FeatureType;
	action: ActionType;
	condition: unknown
}
