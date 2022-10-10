import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientDto } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { PaginateModel } from 'mongoose';
import { Client } from '../../schema';

@Injectable()
export class ClientService {
	constructor(
		@InjectModel(Client.name) private readonly _clientModel: PaginateModel<Client>,
	) {}

	create(clientDto: ClientDto): Promise<Client> {
		const client = new this._clientModel(clientDto);
		return client.save();
	}

	update(id: string, clientDto: ClientDto, userId: string): Promise<Client> {
		return this._clientModel.findByIdAndUpdate(id, { $set: clientDto }).exec();
	}

	findById(id: string): Promise<Client> {
		return this._clientModel.findById(id).exec();
	}

	findByName(name: string): Promise<Client> {
		return this._clientModel.findOne({ name }).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._clientModel.deleteOne({ id }).exec();
	}
}
