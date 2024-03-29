import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note, NoteDto } from '@notepad-helper/models';
import { Observable, of, throwError } from 'rxjs';
import { generateId, NOTES } from '../constant/notes';

@Injectable({
	providedIn: 'root'
})
export class NoteService {
	constructor(private _httpClient: HttpClient) {}

	get(): Observable<Array<Note>> {
		return of(NOTES);
	}

	getById(id: string): Observable<Note> {
		const note = NOTES.find(note => note._id === id);
		console.log(note);
		return note ? of(note) : throwError(() => new HttpErrorResponse({ error: 'Note not found', status: 404, statusText: 'Not Found' }));
	}

	create(form: NoteDto): Observable<Note> {
		const note: Note = { ...form, _id: generateId(), createdBy: generateId(), createdAt: new Date(), updatedBy: generateId(), updatedAt: new Date() };
		NOTES.push(note);
		return of(note);
	}

	update(id: string, form: NoteDto): Observable<Note> {
		const i = NOTES.findIndex(note => note._id === id);
		if (i < 0) {
			return throwError(() => new HttpErrorResponse({ error: `Note doesn't exist`, status: 400, statusText: 'Bad Request' }));
		}
		NOTES[i].name = form.name;
		NOTES[i].content = form.content;
		NOTES[i].updatedAt = new Date();
		return of(NOTES[i]);
	}

	delete(id: string): Observable<boolean> {
		const i = NOTES.findIndex(note => note._id === id);
		if (i < 0) {
			return of(false);
		}
		NOTES.splice(i, 1);
		return of(true);
	}
}
