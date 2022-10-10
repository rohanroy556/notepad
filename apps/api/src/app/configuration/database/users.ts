import { RoleType, UserDto } from "@notepad-helper/models";

export const USERS: ReadonlyArray<UserDto> = [
	{
		name: 'System',
		password: '12345678',
		email: 'no-reply.notepad@proton.me',
		enabled: true,
		role: RoleType.SYSTEM,
	},
	{
		name: 'Product Support',
		password: '12345678',
		email: 'product-support.notepad@proton.me',
		enabled: true,
		role: RoleType.ADMIN,
	},
	{
		name: 'Rohan Roy',
		password: '12345678',
		email: 'roy556.rohan@proton.me',
		enabled: true,
		role: RoleType.USER,
	}
];
