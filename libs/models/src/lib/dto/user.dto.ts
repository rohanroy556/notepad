import { Role, User } from "../interface";

export class UserDto implements Partial<User> {
	readonly name!: string;
	readonly password?: string;
	readonly email!: string;
	readonly enabled!: boolean;
	readonly lastLogin?: Date;
	readonly role!: Role;
}
