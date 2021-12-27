import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@notepad/material';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent, GridComponent, ListComponent,NoteComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    GridComponent,
    ListComponent,
    NoteComponent
  ],
})
export class DashboardModule {}
