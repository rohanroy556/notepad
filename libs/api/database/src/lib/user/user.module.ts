import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Permission, PermissionSchema, User, UserSchema } from './schema';
import { PermissionService, UserService } from './service';

@Module({
	imports: [
    ConfigModule,
		MongooseModule.forFeature([
			{ name: Permission.name, schema: PermissionSchema },
			{ name: User.name, schema: UserSchema },
		]),
	],
	providers: [PermissionService, UserService],
	exports: [PermissionService, UserService],
})
export class UserModule {}
