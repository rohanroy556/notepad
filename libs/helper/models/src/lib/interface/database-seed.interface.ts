import { UserDto } from "../dto";

export interface DatabaseSeed {
	users: ReadonlyArray<UserDto>;
}
