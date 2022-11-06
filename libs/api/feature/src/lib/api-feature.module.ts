import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ApiAuthModule } from '@notepad-api/auth';
import { FeatureController } from './controller';
import { NoteModule } from './note';
import { UserModule } from './user';

@Module({
	controllers: [FeatureController],
	providers: [],
	exports: [],
	imports: [
		ApiAuthModule,
		NoteModule,
		UserModule,
		RouterModule.register([
			{
				path: 'api',
				module: ApiFeatureModule,
				children: [
					{
						path: 'auth',
						module: ApiAuthModule,
					},
					{
						path: 'note',
						module: NoteModule,
					},
					{
						path: 'user',
						module: UserModule,
					},
				],
			},
		]),
	]
})
export class ApiFeatureModule {}
