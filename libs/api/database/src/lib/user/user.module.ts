import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceModule } from '../service';
import { Permission, PermissionSchema, User, UserSchema } from './schema';
import { PermissionService, UserService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Permission.name, schema: PermissionSchema },
			{ name: User.name, schema: UserSchema }
		]),
		ServiceModule,
	],
	providers: [PermissionService, UserService],
	exports: [PermissionService, UserService]
})
export class UserModule {}
