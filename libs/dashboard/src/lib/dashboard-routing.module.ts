import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, NoteComponent } from './component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'note', component: NoteComponent },
	{ path: 'note/:id', component: NoteComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
