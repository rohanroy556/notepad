import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UtilityService } from './utility/utility.service';

@Module({
	imports: [
		ConfigModule,
	],
	providers: [UtilityService],
	exports: [UtilityService],
})
export class ServiceModule {}
