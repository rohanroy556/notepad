import { Component } from '@angular/core';
import { TITLE } from '../../configuration';

@Component({
	selector: 'notepad-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = TITLE;
}
