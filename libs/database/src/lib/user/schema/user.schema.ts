import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User as IUser } from '@notepad/models';
import * as bcrypt from 'bcrypt';
import { CallbackError, Document, model, Types } from "mongoose";
import { Note } from '../../note/schema';
import { Role } from './role.schema';

@Schema({ timestamps: true })
export class User extends Document implements IUser {
	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: String, required: true, unique: true })
	email: string;

	@Prop({ type: String, required: true, select: false, set: function(password: string) { return bcrypt.hashSync(password, 20); } })
	password: string;

	@Prop({ type: Boolean, required: true })
	enabled: boolean;

	@Prop({ type: Date })
	lastLogin: Date;

	@Prop({ type: Types.ObjectId, ref: Role.name, required: true })
	role: Role;

	validatePassword: (password: string) => boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.validatePassword = function (password: string): boolean {
	return bcrypt.compareSync(password, this.password);
}

function removeMiddleWare (this: User, next: (err?: CallbackError) => void): void {
	const _noteModel = model<Note>(Note.name);
	_noteModel.deleteMany({ author: this.email }, next);
}

UserSchema.pre('deleteOne', removeMiddleWare);
UserSchema.pre('remove', removeMiddleWare);
