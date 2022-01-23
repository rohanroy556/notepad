import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schema';
import { NoteService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Note.name, schema: NoteSchema }
		])
	],
	providers: [NoteService],
	exports: [NoteService]
})
export class NoteModule {}
