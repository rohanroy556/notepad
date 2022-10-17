import { AccessorType } from "../enum";
import { User } from "./user.interface";

export interface UserCredentials extends Required<Pick<User, 'email' | 'password'>> {
    type?: AccessorType.USER;
}
