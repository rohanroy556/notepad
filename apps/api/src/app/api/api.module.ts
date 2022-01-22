import { Module } from '@nestjs/common';
import { DatabaseModule } from '@notepad/database';
import { AppController, NoteController } from './controller';

@Module({
	imports: [DatabaseModule],
	controllers: [
		AppController,
		NoteController
	],
})
export class ApiModule {}
