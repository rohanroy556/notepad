import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Validators } from 'ngx-editor';
import { map, Observable, of } from 'rxjs';
import { NOTES } from '../../constant/notes';
import { Note } from '../../model';

@Component({
	selector: 'notepad-note',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
	readonly nameMinLength = 3;
	readonly nameMaxLength = 50;

	note: Pick<Note, '_id' | 'name' | 'content'> = { _id: '', name: '', content: null };
	color = 'accent';
	noteForm = this._formBuilder.group({});
	show$: Observable<boolean> = of(false);

	get name() {
		return this.noteForm.get('name');
	}
	get content() {
		return this.noteForm.get('content');
	}

	constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute) {}

	ngOnInit(): void {
		this.reset();
		this.show$ = this._route.paramMap.pipe(
			map(params => {
				const id = params.get('id'),
					note = NOTES.find(note => note._id === id);
				this.note = { _id: note?._id || '', name: note?.name || '', content: note?.content || null };
				return !!this.note;
			})
		);
	}

	noteChange(): void {
		if (this.note._id && this.name && this.content) {
			this.noteForm.reset();
			const { name = '', content = null } = this.note;
			this.name.setValue(name);
			this.name.updateValueAndValidity();
			this.content.setValue(content);
			this.content.updateValueAndValidity();
		} else {
			this.reset();
		}
	}

	hasError(control: AbstractControl | null): boolean {
		return !!control && !!control.errors && (control.dirty || control.touched);
	}

	reset() {
		this.note = { _id: '', name: '', content: null };
		this.noteForm = this._formBuilder.group({
			name: [this.note.name, [Validators.required(), Validators.minLength(this.nameMinLength), Validators.maxLength(this.nameMaxLength)]],
			content: [this.note.content, [Validators.required()]]
		});
	}

	submit(): void {
		if (!this.noteForm.valid || !this.note) return;
		console.log(this.noteForm.getRawValue());
	}
}
