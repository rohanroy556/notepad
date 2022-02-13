import { RoleDto, RoleType } from "@notepad/models";

export const ROLES: ReadonlyArray<RoleDto> = [
	{
		name: RoleType.ADMIN,
		permissions: []
	},
	{
		name: RoleType.USER,
		permissions: []
	}
];
