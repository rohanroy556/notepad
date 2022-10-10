import { KeyEntity, ResourceType } from "@notepad-helper/models";
import { DeleteResult } from 'mongodb';
import { CallbackError, HydratedDocument, model, PostMiddlewareFunction, PreMiddlewareFunction, Query } from "mongoose";
import { Permission } from "../user/schema";
import { getModel } from "./model.helper";

export function removePermissions<T extends HydratedDocument<KeyEntity>>(resourceType: ResourceType): PreMiddlewareFunction<T> {
    return function<T extends HydratedDocument<KeyEntity>>(this: T, next: (err?: CallbackError) => void): void {
        const _permissionModel = model<Permission>(Permission.name);
        _permissionModel.deleteMany({ resourceId: this._id, resourceType }).exec(next);
    }
}

export async function removeResourcesMatchingPermissions(permissions: ReadonlyArray<Permission>): Promise<void> {
    const _permissionModel = model<Permission>(Permission.name);
    const deleteResources$: Array<Promise<DeleteResult>> = [];
    
    for (const permission of permissions) {
        const sameResourcePermissionCount = await _permissionModel.count({
            _id: { $ne: permission._id },
            resourceId: permission.resourceId,
            resourceType: permission.resourceType,
        }).exec();

        if (sameResourcePermissionCount === 0) {
            const _resourceModel = getModel(permission.resourceType);
            deleteResources$.push(_resourceModel.deleteOne({ _id: permission.resourceId }).exec());
        }
    }

    await Promise.all(deleteResources$);
}

export function removeResourcesOnDeleteMany<T extends Query<DeleteResult, Permission>>(): PostMiddlewareFunction<T> {
    return async function<T extends Query<DeleteResult, Permission>>(this: T, next: (err?: CallbackError) => void): Promise<void> {
        try {
            const deletedPermissions = await this.find().exec();
            await removeResourcesMatchingPermissions(deletedPermissions);
        } catch (error) {
            console.error(error);
        }
        next();
    }
}

export function removeResourcesOnRemove<T extends Permission>(): PostMiddlewareFunction<T> {
    return async function<T extends Permission>(this: T, next: (err?: CallbackError) => void): Promise<void> {
        try {
            await removeResourcesMatchingPermissions([this]);
        } catch (error) {
            console.error(error);
        }
        next();
    }
}
