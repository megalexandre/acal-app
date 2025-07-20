import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { InvoicePreviewTable, Invoice, SelectableInvoice, SelectableInvoiceGroup } from '../invoice.model';
import { Category } from '../../category/category.model';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
})
export class InvoiceCreateComponent  implements OnInit {

  public preview: InvoicePreviewTable = {items: []};
  public loading = true;
  private invoices: Invoice[] = [];
  public addresses: string[] = [];
  public categories: string[] = [];

  public filter = {
    hasMeter: null as boolean | null,
    address: null as string | null,
    category: null as string | null
  };
  
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
        this.invoices = invoices;
        this.preview = this.buildPreview(invoices);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.preview.items = [];
      }
    });

  }

  onchangeFilter() {
    let filteredInvoices = [...this.invoices];

    if (this.filter.hasMeter !== null) {
      filteredInvoices = filteredInvoices.filter(
        invoice => invoice.category.is_hydrometer === this.filter.hasMeter
      );
    }

    if(this.filter.address) {
      filteredInvoices = filteredInvoices.filter(
        invoice => invoice.place.address === this.filter.address
      );
    }

    if(this.filter.category) {
      filteredInvoices = filteredInvoices.filter(
        invoice => invoice.category.name === this.filter.category
      );
    } 

    this.preview = this.buildPreview(filteredInvoices);
  }

  buildPreview(invoices: Invoice[]): InvoicePreviewTable {
    const selectablesInvoice: SelectableInvoice[] = invoices.map((invoice): SelectableInvoice => {
      return {checked: false, ...invoice}; 
    });

    const uniqueAddressesName = Array.from(
      new Set(selectablesInvoice.map(invoice => invoice.place.address))
    ).sort((a, b) => a.localeCompare(b));

    const uniqueCategoriesName = Array.from(
      new Set(selectablesInvoice.map(invoice => invoice.category.name))
    ).sort((a, b) => a.localeCompare(b));

    const groups: SelectableInvoiceGroup[] = uniqueAddressesName.map(address => {
      const items = selectablesInvoice.filter(invoice => invoice.place.address === address);
      
      return ({
        name: address,
        checked: false,
        items: items,
      });
    });


    if(this.addresses.length === 0) {
      this.addresses = uniqueAddressesName;
    }

    if(this.categories.length === 0) {
      this.categories = uniqueCategoriesName
    }


    return  {items: groups}
  }


  trackByGroupId(group: any): any {
    return group.id;
  }

  trackBySelectableId(selectable: any): any {
    return selectable.id;
  }

  totalItems(): number{
    return this.preview.items.reduce((total, group) => total + group.items.length, 0);
  }

  totalValue(): number {
    return this.preview.items.reduce((total, group) => {
      return total + group.items.reduce((subtotal, item) => {
        const value = Number(item.total);
        return subtotal + value;
      }, 0);
    }, 0);
  }

  totalISelectedtems(): number {
    return this.preview.items.reduce((total, group) => {
      return total + group.items.filter(item => item.checked).length;
    }, 0);
  }

  totalSelectedValue(): number {
    return this.preview.items.reduce((total, group) => {
      return total + group.items
        .filter(item => item.checked)
        .reduce((subtotal, item) => {
        const value = Number(item.total) ?? 0;
        return subtotal + value;
      }, 0);
    }, 0);
  }

  toggleGroup(group: SelectableInvoiceGroup) {
    group.checked = !group.checked;
    group.items.forEach(item => item.checked = group.checked);
  }

  toggleAll() {
    const allSelected = this.preview.items.every(group => 
      group.checked && group.items.every(item => item.checked)
    );
    
    this.preview.items.forEach(group => {
      group.checked = !allSelected;
      group.items.forEach(item => item.checked = !allSelected);
    });
  }

}

