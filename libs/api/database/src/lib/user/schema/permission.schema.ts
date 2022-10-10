import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Permission as IPermission, ActionType, ResourceType } from '@notepad-helper/models';
import { Document, Types } from "mongoose";
import { removeResourcesOnDeleteMany, removeResourcesOnRemove } from '../../helper';

@Schema({ timestamps: true })
export class Permission extends Document implements IPermission {
	_id: string;

	@Prop({ type: Array, required: true, enum: ActionType })
	actions: ReadonlyArray<ActionType>;

	@Prop({ type: Types.ObjectId, required: true })
	resourceId: string;

	@Prop({ type: Types.ObjectId, required: true, enum: ResourceType })
	resourceType: ResourceType;

	@Prop({ type: String, required: true })
	userId: string;

	@Prop({ type: Types.ObjectId, required: false })
	createdBy: string;

	@Prop({ type: Date, required: false })
	createdAt: Date;

	@Prop({ type: Types.ObjectId, required: false })
	updatedBy: string;

	@Prop({ type: Date, required: false })
	updatedAt: Date;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);

PermissionSchema.post('deleteMany', removeResourcesOnDeleteMany());
PermissionSchema.post('deleteOne', removeResourcesOnRemove());
PermissionSchema.post('remove', removeResourcesOnRemove());
