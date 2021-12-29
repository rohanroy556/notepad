import { Component, Input } from '@angular/core';
import { Note } from '../../model';

@Component({
	selector: 'notepad-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	@Input() color = 'accent';
	@Input() margin = '1rem';
	@Input() notes: Array<Note> = [];
}
