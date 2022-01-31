import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Permission as IPermission, ActionType, FeatureType } from '@notepad/models';
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Permission extends Document implements IPermission {
	@Prop({ type: String, required: true, enum: FeatureType })
	feature: FeatureType;

	@Prop({ type: String, required: true, enum: ActionType })
	action: ActionType;

	@Prop({ type: Object, required: true, enum: ActionType })
	condition: unknown;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
