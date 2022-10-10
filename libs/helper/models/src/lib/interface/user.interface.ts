import { RoleType } from "../enum";
import { KeyEntity } from "./key-entity.interface";

export interface User extends KeyEntity {
	name: string;
	password?: string;
	email: string;
	enabled: boolean;
	lastLogin?: Date;
	role: RoleType;
}
