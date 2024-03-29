import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientMaterialModule } from '@notepad-client/material';
import { ConfirmComponent, HeaderComponent } from './component';
import { BackButtonDirective } from './directive';

@NgModule({
	declarations: [BackButtonDirective, ConfirmComponent, HeaderComponent],
	imports: [CommonModule, ClientMaterialModule, RouterModule],
	exports: [BackButtonDirective, HeaderComponent]
})
export class ClientSharedModule {}
