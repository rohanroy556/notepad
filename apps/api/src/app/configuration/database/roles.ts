import { RoleDto, RoleType } from "@notepad/models";

export const ROLES: ReadonlyArray<RoleDto> = [
	{
		name: RoleType.Admin,
		permissions: []
	},
	{
		name: RoleType.User,
		permissions: []
	}
];
