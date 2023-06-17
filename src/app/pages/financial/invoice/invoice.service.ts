import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Invoice, InvoiceFilter, InvoicePage, InvoicePageFilter, InvoiceRequest } from '@model/default/_index';
import { Page } from '@model/page';
import { DefaultService } from 'app/@shared/default.service';
import { Observable } from 'rxjs';

@Injectable()
export class InvoiceService  extends DefaultService<Invoice, InvoiceFilter, InvoicePage, InvoicePageFilter >{

  public get env(): string {
    return `${environment.invoice}`
  }

  constructor(public http: HttpClient) {
    super(http)
  }

  public pay(id: string): Observable<any>{
    return this.http.put(`${this.env+'/pay/'}${id}`, "");
  }

  public getReportInvoice(invoice: Invoice){
    return this.http.post<any>(`${environment.invoice}/report/${invoice.id}`, {} ,{ 'responseType': 'arraybuffer' as 'json' })
  }

  public saveAll(invoices: InvoiceRequest[]){
    return this.http.post(`${this.env}`, invoices);
  }

  public getInvoicePage(filter: InvoiceFilter): Observable<Page<InvoicePage>>{
    return this.http.post<Page<InvoicePage>>(`${this.env+'/paginate'}`, filter);
  }


}
