import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApiFeatureModule } from '@notepad-api/feature';
import configuration from './configuration';

@Module({
	imports: [
		ApiFeatureModule,
		ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
		ServeStaticModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => [{
				rootPath: configService.get('NOTEPAD_BUILD_PATH')
			}],
			inject: [ConfigService]
		}),
	]
})
export class AppModule {}
