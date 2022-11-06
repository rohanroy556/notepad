import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ApiDatabaseModule } from '@notepad-api/database';
import { StrategyType } from '@notepad-helper/models';
import { ClientController, UserController } from './controller';
import { AuthService } from './service';
import { LoginStrategy, RequestStrategy } from './strategy';

@Global()
@Module({
	controllers: [ClientController, UserController],
	imports: [
		ApiDatabaseModule,
		ConfigModule,
		JwtModule,
		PassportModule.register({ defaultStrategy: StrategyType.REQUEST }),
	],
	providers: [
		AuthService,
		LoginStrategy,
		RequestStrategy,
	],
	exports: [
		AuthService,
		LoginStrategy,
		RequestStrategy,
	],
})
export class ApiAuthModule {}
