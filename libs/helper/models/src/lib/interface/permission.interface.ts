import { ActionType, ResourceType } from "../enum";
import { KeyEntity } from "./key-entity.interface";

export interface Permission extends KeyEntity {
	actions: ReadonlyArray<ActionType>;
	resourceId: string;
	resourceType: ResourceType;
	userId: string;
}
