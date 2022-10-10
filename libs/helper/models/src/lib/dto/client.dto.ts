import { Client } from "../interface";

export class ClientDto implements Omit<Client, '_id'> {
    _id?: string;
    name!: string;
    secret!: string;
    jwtSecret!: string;
}