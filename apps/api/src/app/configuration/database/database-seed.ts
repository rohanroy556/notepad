import { DatabaseSeed } from "@notepad-helper/models";
import { PERMISSIONS } from "./permissions";
import { ROLES } from "./roles";
import { USERS } from "./users";

export const DATABASE_SEED: DatabaseSeed = {
	permissions: PERMISSIONS,
	roles: ROLES,
	users: USERS,
};
