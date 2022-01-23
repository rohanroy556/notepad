import { Access } from "./access";
import { RoleType } from "../enum";

export interface Role {
	name: RoleType;
	accesses: Array<Access>;
}
