import { Client } from './client.interface';

export interface ClientTokenPayload extends Pick<Client, 'name'> {}
