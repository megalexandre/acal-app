import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '@model/default/dashboard';

@Component({
  selector: 'ngx-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent {

  @Input()
  public dashboard: Dashboard

}
