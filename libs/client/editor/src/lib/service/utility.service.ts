import { Injectable } from '@angular/core';
import { JSONDoc } from '@notepad-helper/models';
import { toDoc, toHTML } from 'ngx-editor';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {
	convert(value: JSONDoc | string) {
		return typeof value === 'string' ? toDoc(value) : toHTML(value);
	}
}
