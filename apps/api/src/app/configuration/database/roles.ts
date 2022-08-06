import { RoleDto, RoleType } from "@notepad-helper/models";

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
