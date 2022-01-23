import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Note as INote } from '@notepad/models';
import { Content } from '@notepad/models';
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Note extends Document implements Omit<INote, '_id' | 'createdAt' | 'updatedAt'> {
	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: Object, required: true })
	content: Content;

	@Prop({ type: String, required: true })
	author: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
