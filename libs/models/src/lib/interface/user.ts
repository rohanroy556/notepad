import { Role } from "./role";

export interface User {
	name: string;
	email: string;
	enabled: boolean;
	lastLogin?: Date;
	role: Role;
}
