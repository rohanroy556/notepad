import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDto } from '@notepad/models';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { NoteDocument } from '../../schema';

@Injectable()
export class NoteService {
	constructor(@InjectModel(NoteDocument.name) private _noteModel: Model<NoteDocument>) {}

	create(noteDto: NoteDto): Promise<Note> {
		const note = new this._noteModel({ ...noteDto, createdAt: new Date(), updatedAt: new Date(), author: 'rohanroy556' });
		return note.save();
	}

	update(id: string, noteDto: NoteDto): Promise<Note> {
		return this._noteModel.findByIdAndUpdate(id, { $set: { ...noteDto, updatedAt: new Date() } }).exec();
	}

	find(): Promise<Array<Note>> {
		return this._noteModel.find().exec();
	}

	findByAuthor(author: string): Promise<Array<Note>> {
		return this._noteModel.find({ author }).exec();
	}

	findById(id: string): Promise<Note> {
		return this._noteModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._noteModel.deleteOne({ id }).exec();
	}
}
