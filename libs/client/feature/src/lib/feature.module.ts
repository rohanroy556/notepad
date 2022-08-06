import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { FeatureController } from './controller';
import { NoteModule } from './note';
import { UserModule } from './user';

@Module({
	controllers: [FeatureController],
	providers: [],
	exports: [],
	imports: [
		NoteModule,
		UserModule,
    RouterModule.register([
			{
				path: 'api',
				module: FeatureModule,
				children: [
					{
						path: 'note',
						module: NoteModule,
					},
					{
						path: 'user',
						module: UserModule,
					},
				]
			},
    ]),
	]
})
export class FeatureModule {}
