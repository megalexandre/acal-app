import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice, InvoicePreview, InvoicesPreview } from '../invoice.model';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
})
export class InvoiceCreateComponent  implements OnInit {

  public preview: InvoicesPreview[] = [];

  constructor(
    public service: InvoiceService
  ){}


  ngOnInit(): void {
    this.load();
  }

  public load(){
    this.service.view("2025-01").subscribe({
      next: (invoices) => {
        this.preview = this.buildPreview(invoices);
      }
    });
  }


  buildPreview(invoices: Invoice[]): InvoicesPreview[] {
    const grouped = new Map<string, InvoicePreview[]>();

    invoices.forEach((invoice) => {
    const key = invoice.place.address;
    const invoicePreview: InvoicePreview = {
      ...invoice,
      checked: false,
    };

      if (!grouped.has(key)) {
        grouped.set(key, []);
      }

      grouped.get(key)!.push(invoicePreview);
    });

    this.preview = Array.from(grouped.entries()).map(([name, previews]) => ({
      name,
      checked: false,
      InvoicePreviews: previews,
    }));

    return this.preview
  }
}

