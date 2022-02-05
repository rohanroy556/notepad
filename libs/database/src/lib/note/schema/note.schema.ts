import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Note as INote } from '@notepad/models';
import { Content } from '@notepad/models';
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Note extends Document implements INote {
	@Prop({ type: Types.ObjectId, required: false })
	_id: string;

	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: Object, required: true })
	content: Content;

	@Prop({ type: String, required: true })
	author: string;

	@Prop({ type: Date, required: false })
	createdAt: Date;

	@Prop({ type: Date, required: false })
	updatedAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
