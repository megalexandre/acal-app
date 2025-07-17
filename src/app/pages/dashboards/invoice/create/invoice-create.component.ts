import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice, InvoicePreview, InvoicesPreview } from '../invoice.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
})
export class InvoiceCreateComponent  implements OnInit {

  public preview: InvoicesPreview[] = [];
  public loading = true;
  
  constructor(
    public service: InvoiceService
  ){}

  ngOnInit(): void {
    this.load();
  }

 
  public load(){
    this.loading = true;
    this.service.view("2025-01").subscribe({
      next: (invoices) => {
        this.preview = this.buildPreview(invoices);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.preview = [];
      }
    });
  }


  buildPreview(invoices: Invoice[]): InvoicesPreview[] {
    const grouped = new Map<string, InvoicePreview[]>();
    var count = 0;

    invoices.forEach((invoice) => {
    
    const key = invoice.place.address;
    const invoicePreview: InvoicePreview = {
      ...invoice,
      checked: false,
      count: ++count
    };

      if (!grouped.has(key)) {
        grouped.set(key, []);
      }

      grouped.get(key)!.push(invoicePreview);
    });

    return Array.from(grouped.entries()).map(([name, previews]) => ({
      name,
      checked: false,
      InvoicePreviews: previews,
    }));
  }

  public onGroupCheckedChange(group: InvoicesPreview): void {
    group.InvoicePreviews.forEach(inv => inv.checked = group.checked);
  }

  public onInvoiceCheckedChange(group: InvoicesPreview): void {
    group.checked = group.InvoicePreviews.every(inv => inv.checked);
  }

}

