import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteDocument, NoteSchema } from './schema';
import { NoteService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: NoteDocument.name, schema: NoteSchema }
		])
	],
	providers: [NoteService],
	exports: [NoteService]
})
export class NoteModule {}
