import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'notepad-confirm',
	templateUrl: './confirm.component.html',
	styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
	constructor(private _dialogRef: MatDialogRef<ConfirmComponent>) {}

	close(result?: boolean): void {
		this._dialogRef.close(result || false);
	}
}
