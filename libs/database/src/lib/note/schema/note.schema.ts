import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Note } from '@notepad/models';
import { Content } from '@notepad/models';
import { Document } from "mongoose";

@Schema()
export class NoteDocument extends Document implements Omit<Note, '_id'> {
	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: Object, required: true })
	content: Content;

	@Prop({ type: Date, required: true })
	createdAt: Date;

	@Prop({ type: Date, required: true })
	updatedAt: Date;

	@Prop({ type: String, required: true })
	author: string;
}

export const NoteSchema = SchemaFactory.createForClass(NoteDocument);
