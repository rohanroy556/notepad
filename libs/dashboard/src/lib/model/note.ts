import { Content } from '@notepad/editor';

export interface Note {
	_id: string;
	name: string;
	content: Content;
	createdAt: Date;
	updatedAt: Date;
	author: string;
}
