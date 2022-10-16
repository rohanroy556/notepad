import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NoteDto, ResourceType } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { FilterQuery, PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { UtilityService } from '../../../service';
import { PermissionService, UserService } from '../../../user';
import { Note } from '../../schema';

@Injectable()
export class NoteService {
	constructor(
		private readonly _permissionService: PermissionService,
		@InjectModel(Note.name) private readonly _noteModel: PaginateModel<Note>,
		private readonly _userService: UserService,
		private readonly _utilityService: UtilityService,
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
		options = this._utilityService.setDefaultPaginationOptions(options);
		options.select = options.select || { content: 0 };
		options.sort = options.sort || { name: 1 };
		return this._noteModel.paginate(query, options);
	}

	findOne(query: FilterQuery<Note> = {}): Promise<Note> {
		return this._noteModel.findOne(query).exec();
	}

	findById(id: string): Promise<Note> {
		return this._noteModel.findById(id).exec();
	}

	async delete(id: string): Promise<DeleteResult> {
		const deleteResult = await this._noteModel.deleteOne({ id }).exec();
		if (deleteResult?.deletedCount > 0) {
			await this._permissionService.deleteMany({ resourceId: id, resourceType: ResourceType.NOTE });
		}
		return deleteResult;
	}
}
