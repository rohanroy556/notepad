import { AccessorType } from '../enum';
import { Client } from './client.interface';

export interface ClientTokenPayload extends Pick<Client, 'name'> {
	type: AccessorType.CLIENT;
}
