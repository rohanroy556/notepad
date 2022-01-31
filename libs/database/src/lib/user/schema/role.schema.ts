import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ActionType, Role as IRole, RoleType } from '@notepad/models';
import { Document } from "mongoose";
import { Permission, PermissionSchema } from './permission.schema';

@Schema({ timestamps: true })
export class Role extends Document implements IRole {
	@Prop({ type: String, required: true, unique: true, enum: RoleType })
	name: RoleType;

	@Prop({ type: PermissionSchema, required: true, enum: ActionType })
	permissions: Array<Permission>;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
