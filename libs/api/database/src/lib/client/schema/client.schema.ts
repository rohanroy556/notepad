import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Client as IClient } from '@notepad-helper/models';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Client extends Document implements IClient {
	@Prop({ type: Types.ObjectId, required: false })
	_id: string;

	@Prop({ type: String, required: true, unique: true })
	name: string;

	@Prop({ type: String, required: true, unique: true })
	secret: string;

	@Prop({ type: Object, required: true, unique: true })
	jwtSecret: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
