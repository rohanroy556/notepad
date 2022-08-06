import { RoleType } from "../enum";
import { Permission } from "./permission";

export interface Role {
	name: RoleType;
	permissions: Array<Permission>;
}
