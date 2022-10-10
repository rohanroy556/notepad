import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Note as INote, ResourceType } from '@notepad-helper/models';
import { Content } from '@notepad-helper/models';
import { Document, Types } from "mongoose";
import { removePermissions } from '../../helper';

@Schema({ timestamps: true })
export class Note extends Document implements INote {
	@Prop({ type: Types.ObjectId, required: false })
	_id: string;

	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: Object, required: true })
	content: Content;

	@Prop({ type: Types.ObjectId, required: false })
	createdBy: string;

	@Prop({ type: Date, required: false })
	createdAt: Date;

	@Prop({ type: Types.ObjectId, required: false })
	updatedBy: string;

	@Prop({ type: Date, required: false })
	updatedAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

NoteSchema.pre('deleteOne', removePermissions(ResourceType.NOTE));
NoteSchema.pre('remove', removePermissions(ResourceType.NOTE));
