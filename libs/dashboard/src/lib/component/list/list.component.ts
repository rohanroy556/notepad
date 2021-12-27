import { Component, Input } from '@angular/core';

@Component({
  selector: 'notepad-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() margin = '1rem';
}
