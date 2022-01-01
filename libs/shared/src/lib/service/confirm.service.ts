import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { ConfirmComponent } from '../component';

@Injectable({
	providedIn: 'root'
})
export class ConfirmService {
	constructor(private _matDialog: MatDialog) {}

	confirm(disableClose = false): Observable<boolean> {
		return this._matDialog
			.open(ConfirmComponent, { disableClose, minWidth: '30vw' })
			.afterClosed()
			.pipe(map(result => !!result));
	}
}
