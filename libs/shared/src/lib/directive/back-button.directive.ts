import { Directive, HostListener } from '@angular/core';
import { NavigationService } from '../service';

@Directive({
	selector: '[notepadBackButton]'
})
export class BackButtonDirective {
	constructor(private _navigationService: NavigationService) {}

	@HostListener('click')
	onClick() {
		this._navigationService.back();
	}
}
