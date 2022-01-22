import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApiModule } from './api';
import configuration from './configuration';

@Module({
  imports: [
		ApiModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    RouterModule.register([
      {
        path: 'api',
        module: ApiModule,
      },
    ]),
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
