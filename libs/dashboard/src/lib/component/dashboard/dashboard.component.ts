import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayType, Note } from '@notepad/api-interfaces';
import { ConfirmService } from '@notepad/shared';
import { Observable } from 'rxjs';
import { NoteService } from '../../service';

@Component({
	selector: 'notepad-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	color = 'accent';
	margin = '1rem';
	notes$: Observable<Array<Note>> = this._noteService.get();
	displayType: DisplayType = this.displayTypes.Grid;
	get displayTypes(): typeof DisplayType {
		return DisplayType;
	}

	constructor(private _confirmService: ConfirmService, private _noteService: NoteService, private _router: Router) {}

	onAdd() {
		this._router.navigate(['note']);
	}

	onEdit(note: Note) {
		this._router.navigate(['note', note._id]);
	}

	onDelete(note: Note) {
		this._confirmService.confirm().subscribe(confirm => (confirm ? this._noteService.delete(note._id) : ''));
	}
}
