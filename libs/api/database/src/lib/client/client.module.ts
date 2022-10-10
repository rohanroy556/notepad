import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './schema';
import { ClientService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Client.name, schema: ClientSchema }
		]),
	],
	providers: [ClientService],
	exports: [ClientService],
})
export class ClientModule {}
