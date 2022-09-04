import { Module } from '@nestjs/common';
import { ApiDatabaseModule } from '@notepad-api/database';
import { NoteController } from './controller';

@Module({
	controllers: [NoteController],
	imports: [ApiDatabaseModule],
})
export class NoteModule {}
