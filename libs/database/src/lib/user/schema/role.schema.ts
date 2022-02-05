import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role as IRole, RoleType } from '@notepad/models';
import { Document, Types } from "mongoose";
import { Permission } from './permission.schema';

@Schema({ timestamps: true })
export class Role extends Document implements IRole {
	@Prop({ type: String, required: true, unique: true, enum: RoleType })
	name: RoleType;

	@Prop({ type: [Types.ObjectId], required: true, autopopulate: true })
	permissions: Array<Permission>;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
