import { Role } from "./role";

export interface User {
	_id: string;
	name: string;
	password?: string;
	email: string;
	enabled: boolean;
	lastLogin?: Date;
	role: Role;
	createdAt: Date;
	updatedAt: Date;
}
