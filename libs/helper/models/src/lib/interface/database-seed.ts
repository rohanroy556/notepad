import { PermissionDto, RoleDto, UserDto } from "../dto";

export interface DatabaseSeed {
	permissions: ReadonlyArray<PermissionDto>;
	roles: ReadonlyArray<RoleDto>;
	users: ReadonlyArray<UserDto>;
}
