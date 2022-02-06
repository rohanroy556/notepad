import { User } from "../interface";

export class UserDto implements Omit<User, '_id' | 'role' | 'createdAt' | 'updatedAt'> {
	readonly name!: string;
	readonly password?: string;
	readonly email!: string;
	readonly enabled!: boolean;
	readonly lastLogin?: Date;
	readonly role!: string;
}
