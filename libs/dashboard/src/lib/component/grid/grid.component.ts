import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'notepad-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() margin = '1rem';
  cols = 1;
  rowHeight = '12rem';
  onResize = () => this.cols = Math.floor(window.innerWidth / 200);

  ngOnInit(): void {
    this.onResize();
  }
}
