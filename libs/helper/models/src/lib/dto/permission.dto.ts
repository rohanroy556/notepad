import { ActionType, ResourceType } from "../enum";
import { KeyEntity, Permission } from "../interface";

export class PermissionDto implements Omit<Permission, keyof KeyEntity> {
	actions!: ReadonlyArray<ActionType>;
	resourceId!: string;
	resourceType!: ResourceType;
	userId!: string;
}
