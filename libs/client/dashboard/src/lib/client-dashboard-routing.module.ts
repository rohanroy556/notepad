import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGuard } from '@notepad-client/shared';
import { DashboardComponent, NoteComponent } from './component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'note', component: NoteComponent, canDeactivate: [FormGuard] },
	{ path: 'note/:id', component: NoteComponent, canDeactivate: [FormGuard] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientDashboardRoutingModule {}
