import { Content } from "./content";

export interface Note {
	_id: string;
	name: string;
	content: Content;
	createdAt: Date;
	updatedAt: Date;
	author: string;
}

export type NoteData = Pick<Note, 'name' | 'content'>;
