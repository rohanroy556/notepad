import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'notepad-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() title = '';
	get showBackButton(): boolean {
		return !this._router.isActive('/', { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' });
	}

	constructor(private _router: Router) {}
}
