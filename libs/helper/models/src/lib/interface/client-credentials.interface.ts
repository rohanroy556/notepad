import { Client } from "./client.interface";

export interface ClientCredentials extends Pick<Client, '_id' | 'secret'> {}
