import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '@model/default/dashboard';

@Component({
  selector: 'ngx-book-summary',
  templateUrl: './book-summary.component.html',
  styleUrls: ['./book-summary.component.scss']
})
export class BookSummaryComponent  {

  @Input()
  public dashboard: Dashboard

}
