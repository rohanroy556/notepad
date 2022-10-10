import { ClientDto, UserDto } from "../dto";

export interface DatabaseSeed {
	users: ReadonlyArray<UserDto>;
	clients: ReadonlyArray<ClientDto>;
}
