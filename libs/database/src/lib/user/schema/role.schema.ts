import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ActionType, Role as IRole, RoleType } from '@notepad/models';
import { Document } from "mongoose";
import { Access, AccessSchema } from './access.schema';

@Schema({ timestamps: true })
export class Role extends Document implements IRole {
	@Prop({ type: String, required: true, enum: RoleType })
	name: RoleType;

	@Prop({ type: AccessSchema, required: true, enum: ActionType })
	accesses: Array<Access>;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
