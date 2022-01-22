import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './configuration';
import { NoteModule } from './note';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.uri'),
        user: configService.get('database.user'),
        pass: configService.get('database.pass'),
        retryWrites: true,
        retryReads: true,
        w: 'majority'
      }),
      inject: [ConfigService]
    }),
		NoteModule
  ],
	controllers: [],
	providers: [],
	exports: [NoteModule]
})
export class DatabaseModule {}
