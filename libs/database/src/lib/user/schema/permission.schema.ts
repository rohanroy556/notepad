import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Permission as IPermission, ActionType, FeatureType } from '@notepad/models';
import * as JsonLogic from 'json-logic-js';
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Permission extends Document implements IPermission {
	@Prop({ type: String, required: true, enum: FeatureType })
	feature: FeatureType;

	@Prop({ type: String, required: true, enum: ActionType })
	action: ActionType;

	@Prop({ type: Object, required: true })
	condition: JsonLogic.RulesLogic;

	checkCondition: <U, R>(user: U, resource: R) => boolean;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);

PermissionSchema.methods.checkCondition = function <U, R>(user: U, resource: R): boolean {
	return !!JsonLogic.apply(this.condition, { user, resource });
}
