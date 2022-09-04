import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongooseAutopopulate from 'mongoose-autopopulate';
import * as mongoosePaginate from 'mongoose-paginate';
import { NoteModule } from './note';
import { SeedModule } from './seed';
import { UserModule } from './user';

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
        w: 'majority',
				connectionFactory: connection => {
					connection.plugin(mongooseAutopopulate);
					connection.plugin(mongoosePaginate);
					return connection;
				}
      }),
      inject: [ConfigService]
    }),
		NoteModule,
		SeedModule,
		UserModule
  ],
	controllers: [],
	providers: [],
	exports: [NoteModule, UserModule]
})
export class ApiDatabaseModule {}
