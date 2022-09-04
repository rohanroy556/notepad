import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientEditorModule } from '@notepad-client/editor';
import { ClientMaterialModule } from '@notepad-client/material';
import { DashboardComponent, GridComponent, ListComponent, NoteComponent } from './component';

@NgModule({
	imports: [
		CommonModule,
		ClientDashboardRoutingModule,
		ClientEditorModule,
		ClientMaterialModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
	],
	declarations: [DashboardComponent, GridComponent, ListComponent, NoteComponent]
})
export class ClientDashboardModule {}
