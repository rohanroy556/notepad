import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schema';
import { NoteService } from './service';

@Module({
	imports: [
    ConfigModule,
		MongooseModule.forFeature([
			{ name: Note.name, schema: NoteSchema }
		])
	],
	providers: [NoteService],
	exports: [NoteService]
})
export class NoteModule {}
