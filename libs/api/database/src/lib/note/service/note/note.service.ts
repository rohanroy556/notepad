import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { NoteDto } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { Note } from '../../schema';

@Injectable()
export class NoteService {
	private readonly _DEFAULT_PAGINATE_OPTIONS: PaginateOptions = this._configService.get('DEFAULT_PAGINATE_OPTIONS');

	constructor(
		private readonly _configService: ConfigService,
		@InjectModel(Note.name) private readonly _noteModel: PaginateModel<Note>
	) {}

	create(noteDto: NoteDto): Promise<Note> {
		const note = new this._noteModel({ ...noteDto, author: 'rohanroy556' });
		return note.save();
	}

	update(id: string, noteDto: NoteDto): Promise<Note> {
		return this._noteModel.findByIdAndUpdate(id, { $set: noteDto }).exec();
	}

	count(query: FilterQuery<Note> = {}): Promise<number> {
		return this._noteModel.countDocuments(query).exec();
	}

	find(query: FilterQuery<Note> = {}, options: PaginateOptions = {}): Promise<PaginateResult<Note>> {
		options.limit = Number(options.limit) >= 1 ? Number(options.limit) : this._DEFAULT_PAGINATE_OPTIONS.limit;
		options.page = Number(options.page) >= 1 ? Number(options.page) : this._DEFAULT_PAGINATE_OPTIONS.page;
		options.select = options.select || { password: 0, role: 0 };
		options.sort = options.sort || { name: 1 };
		return this._noteModel.paginate(query, options);
	}

	findById(id: string): Promise<Note> {
		return this._noteModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._noteModel.deleteOne({ id }).exec();
	}
}
