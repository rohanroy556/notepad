import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {
	private _history: string[] = [];

	constructor(private _router: Router, private _location: Location) {
		this._router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this._history.push(event.urlAfterRedirects);
			}
		});
	}

	back(): void {
		this._history.pop();
		this._history.length > 0 ? this._location.back() : this._router.navigateByUrl('/');
	}
}
