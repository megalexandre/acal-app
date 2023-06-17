import { InvoiceService } from './../invoice.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '@model/default/invoice';
import { NbDialogService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { InvoicePayComponent } from '../invoice-pay/invoice-pay.component';

@Component({
  selector: 'ngx-invoice-view',
  styleUrls: ['./invoice-view.component.scss'],
  templateUrl: './invoice-view.component.html',
})
export class InvoiceViewComponent implements OnInit{

  public invoice: Invoice;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    private service: InvoiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private dialogService: NbDialogService
  ) {}


  ngOnInit(): void {
    if(!this.data.id){
      this.back();
    }

    this.service.getById(this.data.id).subscribe(
      (invoice: Invoice)=> {
        this.invoice = invoice;
        this.loaded = true
      }
    )
  }

  open() {
    this.dialogService.open(InvoicePayComponent, {
      context: {
        invoice: this.invoice
      },
    });
  }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }


  public getCategoryValue(){
    return this.invoice.invoiceDetails.find( d=> d.reason === "CATEGORY" ).value
  }

  public getAssociatedValue(){

  }

  public getTotal(){
    return this.invoice.invoiceDetails.map(it => it.value).reduce((prev,next) => prev + next)
  }

}
