import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema, User, UserSchema } from './schema';
import { UserService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Role.name, schema: RoleSchema },
			{ name: User.name, schema: UserSchema }
		])
	],
  providers: [UserService],
	exports: [UserService]
})
export class UserModule {}
