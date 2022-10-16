import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceModule } from '../service';
import { UserModule } from '../user';
import { Note, NoteSchema } from './schema';
import { NoteService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Note.name, schema: NoteSchema }
		]),
		ServiceModule,
		UserModule,
	],
	providers: [NoteService],
	exports: [MongooseModule, NoteService]
})
export class NoteModule {}
