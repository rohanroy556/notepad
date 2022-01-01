import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../model';

@Component({
	selector: 'notepad-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
	@Input() color = 'accent';
	@Input() margin = '1rem';
	@Input() notes: Array<Note> = [];
	@Output() edit: EventEmitter<Note> = new EventEmitter<Note>();
	@Output() delete: EventEmitter<Note> = new EventEmitter<Note>();

	cols = 1;
	rowHeight = '12rem';
	onResize = () => (this.cols = Math.floor(window.innerWidth / 300));

	ngOnInit(): void {
		this.onResize();
	}

	onEdit(note: Note) {
		this.edit.emit(note);
	}

	onDelete($event: MouseEvent | TouchEvent, note: Note) {
		$event.stopPropagation();
		this.delete.emit(note);
	}
}
