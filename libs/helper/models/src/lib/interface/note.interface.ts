import { Content } from "./content.interface";
import { KeyEntity } from "./key-entity.interface";

export interface Note extends KeyEntity {
	name: string;
	content: Content;
}
