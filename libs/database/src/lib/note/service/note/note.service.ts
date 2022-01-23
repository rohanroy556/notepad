import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note as INote, NoteDto } from '@notepad/models';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { Note } from '../../schema';

@Injectable()
export class NoteService {
	constructor(@InjectModel(Note.name) private _noteModel: Model<INote>) {}

	create(noteDto: NoteDto): Promise<INote> {
		const note = new this._noteModel({ ...noteDto, author: 'rohanroy556' });
		return note.save();
	}

	update(id: string, noteDto: NoteDto): Promise<INote> {
		return this._noteModel.findByIdAndUpdate(id, { $set: noteDto }).exec();
	}

	find(): Promise<Array<INote>> {
		return this._noteModel.find().exec();
	}

	findByAuthor(author: string): Promise<Array<INote>> {
		return this._noteModel.find({ author }).exec();
	}

	findById(id: string): Promise<INote> {
		return this._noteModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._noteModel.deleteOne({ id }).exec();
	}
}
