import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '@notepad-helper/models';

@Component({
	selector: 'notepad-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	@Input() color = 'accent';
	@Input() margin = '1rem';
	@Input() notes: Array<Note> = [];
	@Output() edit: EventEmitter<Note> = new EventEmitter<Note>();
	@Output() delete: EventEmitter<Note> = new EventEmitter<Note>();

	onEdit(note: Note) {
		this.edit.emit(note);
	}

	onDelete($event: MouseEvent | TouchEvent, note: Note) {
		$event.stopPropagation();
		this.delete.emit(note);
	}
}
