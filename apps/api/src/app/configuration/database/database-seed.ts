import { DatabaseSeed } from "@notepad-helper/models";
import { CLIENTS } from "./clients";
import { USERS } from "./users";

export const DATABASE_SEED: DatabaseSeed = {
	users: USERS,
	clients: CLIENTS,
};
