import { RoleType } from "../enum";
import { Permission, Role } from "../interface";

export class RoleDto implements Role {
	readonly name!: RoleType;
	readonly permissions!: Permission[];
}
