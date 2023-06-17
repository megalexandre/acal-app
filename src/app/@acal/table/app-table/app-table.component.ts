import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent {

  @Input()
  tableSize: string = "table-sm"

  @Input()
  tableStriped: boolean = true

  @Input()
  tableBordered: boolean = false

  constructor() { }

}
