import { Module } from '@nestjs/common';
import { DatabaseModule } from '@notepad-api/database';
import { PermissionController, RoleController, UserController } from './controller';

@Module({
	controllers: [UserController, PermissionController, RoleController],
	imports: [DatabaseModule],
})
export class UserModule {}
