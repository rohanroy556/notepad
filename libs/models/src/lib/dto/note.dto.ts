import { Content, NoteData } from "../interface";

export class NoteDto implements NoteData {
	readonly name!: string;
	readonly content!: Content;
}
