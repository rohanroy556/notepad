import { Module } from '@nestjs/common';
import { ApiDatabaseModule } from '@notepad-api/database';
import { PermissionController, RoleController, UserController } from './controller';

@Module({
	controllers: [UserController, PermissionController, RoleController],
	imports: [ApiDatabaseModule],
})
export class UserModule {}
