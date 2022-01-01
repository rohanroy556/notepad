import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@notepad/material';
import { ConfirmComponent, HeaderComponent } from './component';
import { BackButtonDirective } from './directive';

@NgModule({
	declarations: [BackButtonDirective, ConfirmComponent, HeaderComponent],
	imports: [CommonModule, MaterialModule, RouterModule],
	exports: [BackButtonDirective, HeaderComponent]
})
export class SharedModule {}
