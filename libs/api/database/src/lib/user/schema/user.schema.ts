import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleType, User as IUser } from '@notepad-helper/models';
import * as bcrypt from 'bcrypt';
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class User extends Document implements IUser {
	_id: string;

	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: String, required: true, unique: true })
	email: string;

	@Prop({
		type: String,
		required: true,
		select: false,
		set: function(password: string) { return bcrypt.hashSync(password, 12); },
	})
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
	console.log(this);
	return bcrypt.compareSync(password, this.password);
}
