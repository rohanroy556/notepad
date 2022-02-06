import { Content, Note } from "../interface";

export class NoteDto implements Pick<Note, 'name' | 'content'> {
	readonly name!: string;
	readonly content!: Content;
}
