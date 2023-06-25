import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice, InvoiceFilter, InvoicePage, InvoicePageFilter } from '@model/default/invoice';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { InvoiceService } from '../invoice.service';
import { format } from 'date-fns'
import { ListComponent } from '@core/list.component';

@Component({
  selector: 'ngx-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent extends ListComponent implements OnInit {

  public filter: InvoicePageFilter = new InvoicePageFilter()
  public page: Page<InvoicePage>;

  constructor(
    public service: InvoiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
    super(service, activatedRoute, router, data)
  }

  sumInvoiceValues(invoice: Invoice): number {
    return invoice.invoiceDetails.map(d => d.value).reduce((prev,next) => prev+ next)
  }

  download(id: string){
    this.service.getReportInvoice(id).subscribe((response)=>{
      let file = new Blob([response], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    })
  }

  downloadAll(){
    this.service.getReportInvoiceLot(this.prepareDataForSearch()).subscribe((response)=>{
      let file = new Blob([response], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    })
  }

  ngOnInit(): void {
    this.init();
  }

  public prepareDataForSearch() {
    let formated: string;

    if(this.filter.dueDate){
      formated = format(new Date(this.filter.dueDate), "dd-MM-yyyy")
    } else {
      formated = null
    }

    return {...this.filter, dueDate: formated }
  }

}
