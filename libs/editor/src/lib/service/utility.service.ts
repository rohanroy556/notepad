import { Injectable } from '@angular/core';
import { toDoc, toHTML } from 'ngx-editor';
import { JSONDoc } from '../model';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {
	convert(value: JSONDoc | string) {
		return typeof value === 'string' ? toDoc(value) : toHTML(value);
	}
}
