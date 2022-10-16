import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ApiDatabaseModule } from '@notepad-api/database';
import { AuthService } from './service';

@Global()
@Module({
	controllers: [],
	imports: [
		ApiDatabaseModule,
		ConfigModule,
		JwtModule,
	],
	providers: [AuthService],
	exports: [AuthService],
})
export class ApiAuthModule {}
