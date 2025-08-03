import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from '../../invoice.model';

@Component({
  selector: 'app-invoice-view-detail',
  templateUrl: './invoice-view-detail.component.html',
})
export class InvoiceViewDetailComponent implements OnInit {

  @Input()
  public invoice!: Invoice;
  
  ngOnInit(): void {
   
  }

  get now(): Date {
    return new Date();
  }
  

}
