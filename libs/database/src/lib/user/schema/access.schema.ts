import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Access as IAccess, ActionType, FeatureType } from '@notepad/models';
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Access extends Document implements IAccess {
	@Prop({ type: String, required: true, enum: FeatureType })
	feature: FeatureType;

	@Prop({ type: String, required: true, enum: ActionType })
	action: ActionType;
}

export const AccessSchema = SchemaFactory.createForClass(Access);
