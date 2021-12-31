import { Component } from '@angular/core';
import { NOTES } from '../../constant/notes';
import { DisplayType, Note } from '../../model';

@Component({
	selector: 'notepad-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	color = 'accent';
	margin = '1rem';
	notes: Array<Note> = NOTES;
	displayType: DisplayType = this.displayTypes.Grid;
	get displayTypes(): typeof DisplayType {
		return DisplayType;
	}
}
