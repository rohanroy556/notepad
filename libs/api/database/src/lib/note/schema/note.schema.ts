import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Note as INote } from '@notepad-helper/models';
import { Content } from '@notepad-helper/models';
import { Document, Types } from "mongoose";
import { User } from '../../user/schema';

@Schema({ timestamps: true })
export class Note extends Document implements INote {
	@Prop({ type: Types.ObjectId, required: false })
	_id: string;

	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: Object, required: true })
	content: Content;

	@Prop({ type: Types.ObjectId, ref: User.name, required: true })
	author: string;

	@Prop({ type: Date, required: false })
	createdAt: Date;

	@Prop({ type: Date, required: false })
	updatedAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
