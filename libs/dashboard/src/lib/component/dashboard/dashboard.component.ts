import { Component } from '@angular/core';
import { DisplayType } from '../../model';

@Component({
  selector: 'notepad-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  margin = '1rem';
  displayType: DisplayType = this.displayTypes.Grid;
  get displayTypes(): typeof DisplayType {
    return DisplayType;
  }
}
