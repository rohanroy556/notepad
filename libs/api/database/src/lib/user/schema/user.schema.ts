import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ResourceType, RoleType, User as IUser } from '@notepad-helper/models';
import * as bcrypt from 'bcrypt';
import { Document, Types } from "mongoose";
import { removePermissions } from '../../helper';

@Schema({ timestamps: true })
export class User extends Document implements IUser {
	_id: string;

	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: String, required: true, unique: true })
	email: string;

	@Prop({ type: String, required: true, select: false, set: function(password: string) { return bcrypt.hashSync(password, 20); } })
	password?: string;

	@Prop({ type: Boolean, required: true })
	enabled: boolean;

	@Prop({ type: Date, required: false })
	lastLogin: Date;

	@Prop({ type: String, enum: RoleType, required: true, default: RoleType.USER })
	role: RoleType;

	@Prop({ type: Types.ObjectId, required: false })
	createdBy: string;

	@Prop({ type: Date, required: false })
	createdAt: Date;

	@Prop({ type: Types.ObjectId, required: false })
	updatedBy: string;

	@Prop({ type: Date, required: false })
	updatedAt: Date;

	validatePassword: (password: string) => boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.validatePassword = function (password: string): boolean {
	return bcrypt.compareSync(password, this.password);
}

UserSchema.pre('deleteOne', removePermissions(ResourceType.USER));
UserSchema.pre('remove', removePermissions(ResourceType.USER));
