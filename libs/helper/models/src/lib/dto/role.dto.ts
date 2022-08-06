import { RoleType } from "../enum";
import { Role } from "../interface";

export class RoleDto implements Pick<Role, 'name'> {
	readonly name!: RoleType;
	readonly permissions!: ReadonlyArray<string>;
}
