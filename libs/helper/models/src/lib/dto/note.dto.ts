import { Content, KeyEntity, Note } from "../interface";

export class NoteDto implements Omit<Note, keyof KeyEntity> {
	readonly name!: string;
	readonly content!: Content;
}
