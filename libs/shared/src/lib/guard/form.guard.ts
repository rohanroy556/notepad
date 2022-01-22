import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { OnDeactivate } from '@notepad/models';
import { Observable } from 'rxjs';
import { ConfirmService } from '../service';

@Injectable({
	providedIn: 'root'
})
export class FormGuard implements CanDeactivate<OnDeactivate> {
	constructor(private _confirmService: ConfirmService) {}

	canDeactivate(component: OnDeactivate): Observable<boolean | UrlTree> | boolean {
		return component.onDeactivate() || this._confirmService.confirm();
	}
}
