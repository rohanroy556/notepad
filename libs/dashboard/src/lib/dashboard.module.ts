import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@notepad/editor';
import { MaterialModule } from '@notepad/material';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent, GridComponent, ListComponent, NoteComponent } from './component';

@NgModule({
	imports: [CommonModule, DashboardRoutingModule, EditorModule, FormsModule, HttpClientModule, MaterialModule, ReactiveFormsModule],
	declarations: [DashboardComponent, GridComponent, ListComponent, NoteComponent]
})
export class DashboardModule {}
