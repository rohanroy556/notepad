import { User } from "./user.interface";

export interface UserTokenPayload extends Pick<User, 'email' | 'role'> {
    client: string;
}
