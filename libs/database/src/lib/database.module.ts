import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('DATABASE.URI'),
        user: configService.get('DATABASE.USER'),
        pass: configService.get('DATABASE.PASS'),
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
