import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Permission, PermissionSchema, Role, RoleSchema, User, UserSchema } from './schema';
import { PermissionService, RoleService, UserService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Permission.name, schema: PermissionSchema },
			{ name: Role.name, schema: RoleSchema },
			{ name: User.name, schema: UserSchema }
		])
	],
	providers: [PermissionService, RoleService, UserService],
	exports: [PermissionService, RoleService, UserService]
})
export class UserModule {}
