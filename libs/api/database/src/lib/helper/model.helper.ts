import { ResourceType } from "@notepad-helper/models";
import { Model, model } from "mongoose";
import { Note } from "../note/schema";
import { Permission, User } from "../user/schema";

export type ResourceClassType = typeof Note | typeof Permission | typeof User;

export function getResourceClass(resourceType: ResourceType): ResourceClassType | null {
    return (
        resourceType === ResourceType.NOTE
        ? Note
        : (
            resourceType === ResourceType.PERMISSION
            ? Permission
            : (resourceType === ResourceType.USER ? User : null)
        )
    );
}

export function getModel(resourceType: ResourceType): Model<ResourceClassType> | null {
    const resourceClass = getResourceClass(resourceType);
    return resourceClass ? model<typeof resourceClass>(resourceClass.name) : null;
}
