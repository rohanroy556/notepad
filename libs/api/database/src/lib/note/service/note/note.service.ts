import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { NoteDto, ResourceType } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { PermissionService, UserService } from '../../../user';
import { Note } from '../../schema';

@Injectable()
export class NoteService {
	private readonly _DEFAULT_PAGINATE_OPTIONS: PaginateOptions = this._configService.get('DEFAULT_PAGINATE_OPTIONS');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _permissionService: PermissionService,
		@InjectModel(Note.name) private readonly _noteModel: PaginateModel<Note>,
		private readonly _userService: UserService,
	) {}

	async create(noteDto: NoteDto, userId: string): Promise<Note> {
		const user = await this._userService.findById(userId);
		if (!user) {
			throw new BadRequestException();
		}

		const note = new this._noteModel(noteDto);
		const newNote = await note.save();
		if (newNote) {
			await this._permissionService.addResourceCreator(newNote._id, ResourceType.NOTE, user._id);
		}
		return newNote;
	}

	async update(id: string, noteDto: NoteDto, userId: string): Promise<Note> {
		const user = await this._userService.findById(userId);
		if (!user) {
			throw new BadRequestException();
		}

		return this._noteModel.findByIdAndUpdate(id, { $set: { ...noteDto, updatedBy: user._id } }).exec();
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

	findOne(query: FilterQuery<Note> = {}): Promise<Note> {
		return this._noteModel.findOne(query).exec();
	}

	findById(id: string): Promise<Note> {
		return this._noteModel.findById(id).exec();
	}

	delete(id: string): Promise<DeleteResult> {
		return this._noteModel.deleteOne({ id }).exec();
	}
}
