import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongooseAutopopulate from 'mongoose-autopopulate';
import * as mongoosePaginate from 'mongoose-paginate';
import { ClientModule } from './client';
import { NoteModule } from './note';
import { SeedModule } from './seed';
import { ServiceModule } from './service';
import { UserModule } from './user';

@Module({
  imports: [
		ClientModule,
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
		ServiceModule,
		UserModule,
  ],
	controllers: [],
	providers: [],
	exports: [ClientModule, NoteModule, ServiceModule, UserModule]
})
export class ApiDatabaseModule {}
