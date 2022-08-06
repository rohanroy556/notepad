import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoteService } from '@notepad-api/database';
import { NoteDto, Note } from '@notepad-helper/models';
import { DeleteResult } from 'mongodb';
import { PaginateResult } from 'mongoose';

@Controller('')
export class NoteController {
	constructor(private readonly _noteService: NoteService) {}

	@Post()
	create(@Body() noteDto: NoteDto): Promise<Note> {
		return this._noteService.create(noteDto);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() noteDto: NoteDto): Promise<Note> {
		return this._noteService.update(id, noteDto);
	}

	@Get()
	get(): Promise<PaginateResult<Note>> {
		return this._noteService.find();
	}

	@Get(':id')
	getById(@Param('id') id: string): Promise<Note> {
		return this._noteService.findById(id);
	}

	@Delete(':id')
	delete(@Param('id') id: string): Promise<DeleteResult> {
		return this._noteService.delete(id);
	}
}
