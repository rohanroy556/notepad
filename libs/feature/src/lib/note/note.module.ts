import { Module } from '@nestjs/common';
import { DatabaseModule } from '@notepad/database';
import { NoteController } from './controller';

@Module({
	controllers: [NoteController],
	imports: [DatabaseModule],
})
export class NoteModule {}
