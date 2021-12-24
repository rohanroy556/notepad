import { Component } from '@angular/core';
import { TITLE } from '../../configuration';

@Component({
  selector: 'notepad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = TITLE;
}
