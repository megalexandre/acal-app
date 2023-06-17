import { DefaultFilter, DefaultFilterPage, Link } from "./_index";

export interface Invoice {
  id?: string,
  reference: string,
  link?: Link,
  linkId: string,
  dueDate: string,
  emission: string,
  isPayed: boolean,
  invoiceDetails: InvoiceDetail[],
}

export interface InvoicePage {
  id: string,
  isOverdue: boolean,
  totalValue: number,
  reference: string,
  link?: Link,
  dueDate: string,
  emission: string,
  isPayed: boolean,
  invoiceDetails: InvoiceDetail[],
}


export interface InvoiceDetail {
  id?: string,
  reason: string,
  value: number,
  isPayed: boolean,
  dataPayed: string
}

export interface InvoiceRequest {
  link: linkRequest,
  reference: string,
  invoiceDetails: InvoiceDetail[],
  dueDate: string,
  emission: string,
}

interface linkRequest {
  id: string
}

export interface InvoiceFilter extends DefaultFilter {
  id?: string,
  reference?: string,
  value?: number,
  dueDate?: string,
  customerName: string,

  reset(): void

}

export class InvoicePageFilter extends DefaultFilterPage {

    id?: string = null;
    reference?: string = null;
    value?: number = null;
    dueDate?: string = null;
    customerName: string = null;

    reset(){
      super.reset();
      this.id = null;
      this.reference = null;
      this.value = null;
      this.dueDate = null;
      this.customerName = null;
    }

}
