import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { NoteForm } from '../../model';
import { NoteService } from '../../service';

@Component({
	selector: 'notepad-note',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
	readonly nameMinLength = 3;
	readonly nameMaxLength = 50;

	private _id = '';
	note: NoteForm = { name: '', content: null };
	color = 'accent';
	noteForm = this._formBuilder.group({});
	show$: Observable<boolean> = of(false);

	get name() {
		return this.noteForm.get('name');
	}
	get content() {
		return this.noteForm.get('content');
	}

	constructor(
		private _formBuilder: FormBuilder,
		private _noteService: NoteService,
		private _route: ActivatedRoute,
		private _router: Router
	) {}

	ngOnInit(): void {
		this.reset();
		this.show$ = this._route.paramMap.pipe(
			switchMap(params => {
				const id = params.get('id') || '';
				return this._noteService.getById(id);
			}),
			map(note => {
				this._id = note._id;
				this.note = { name: note.name, content: note.content };
				this.noteChange();
				return true;
			}),
			catchError(() => {
				this.reset();
				return of(true);
			})
		);
	}

	noteChange(): void {
		if (this.name && this.content) {
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
		this._id = '';
		this.note = { name: '', content: null };
		this.noteForm = this._formBuilder.group({
			name: [this.note.name, [Validators.required(), Validators.minLength(this.nameMinLength), Validators.maxLength(this.nameMaxLength)]],
			content: [this.note.content, [Validators.required()]]
		});
	}

	submit(): void {
		if (!this.noteForm.valid) return;
		const formData = this.noteForm.getRawValue();
		const note$ = this._id ? this._noteService.update(this._id, formData) : this._noteService.create(formData);
		note$.subscribe({
			next: () => this._router.navigate(['']),
			error: error => {
				console.error(error);
			}
		});
	}
}
