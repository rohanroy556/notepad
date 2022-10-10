import { RoleType } from "../enum";
import { KeyEntity, User } from "../interface";

export class UserDto implements Omit<User, keyof KeyEntity> {
	readonly name!: string;
	readonly password?: string;
	readonly email!: string;
	readonly enabled!: boolean;
	readonly lastLogin?: Date;
	readonly role!: RoleType;
}
