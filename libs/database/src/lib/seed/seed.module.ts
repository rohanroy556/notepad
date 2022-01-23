import { Module } from '@nestjs/common';
import { NoteModule } from '../note';
import { SeedService } from './service';

@Module({
	imports: [NoteModule],
	providers: [SeedService]
})
export class SeedModule {}
