import { Component, OnInit } from '@angular/core';
import { Invoice, InvoicePreviewTable, SelectableInvoice, SelectableInvoiceGroup } from '../invoice.model';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
})
export class InvoiceCreateComponent  implements OnInit {

  public reference: string | null = null;
  public dueDate: Date | null = null;

  public preview: InvoicePreviewTable = {items: []};
  public loading = true;
  public invoices: Invoice[] = [];
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
  }

  public search(){
    this.loading = true;

    if (this.reference) {
      this.service.preview(this.reference).subscribe({
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
  }

 public confirm() {

  const selectedItems = this.preview.items
  .flatMap(group => group.items) 
  .filter(item => item.checked); 

  selectedItems.forEach(item => {
    item.due_date = this.dueDate!;
  });

  this.service.create(selectedItems).subscribe({
    next: (invoices) => {
      this.preview.items = this.preview.items.map(group => ({
        ...group,
        items: group.items.filter(item => !item.checked)
      }));
    },
    error: () => {
    }
  });
}

  private filterByHasMeter(invoices: Invoice[]): Invoice[] {
    if (this.filter.hasMeter === null) return invoices;
    return invoices.filter(invoice => invoice.category.is_hydrometer === this.filter.hasMeter);
  }

  private filterByAddress(invoices: Invoice[]): Invoice[] {
    if (!this.filter.address) return invoices;
    return invoices.filter(invoice => invoice.place.address === this.filter.address);
  }

  private filterByCategory(invoices: Invoice[]): Invoice[] {
    if (!this.filter.category) return invoices;
    return invoices.filter(invoice => invoice.category.name === this.filter.category);
  }

  onchangeFilter() {
    let filteredInvoices = [...this.invoices];
    
    filteredInvoices = this.filterByHasMeter(filteredInvoices);
    filteredInvoices = this.filterByAddress(filteredInvoices);
    filteredInvoices = this.filterByCategory(filteredInvoices);

    this.preview = this.buildPreview(filteredInvoices);
  }

  private getUniqueAddresses(invoices: SelectableInvoice[]): string[] {
    return Array.from(
      new Set(invoices.map(invoice => invoice.place.address))
    ).sort((a, b) => a.localeCompare(b));
  }

  private getUniqueCategories(invoices: SelectableInvoice[]): string[] {
    return Array.from(
      new Set(invoices.map(invoice => invoice.category.name))
    ).sort((a, b) => a.localeCompare(b));
  }

  private createSelectableInvoices(invoices: Invoice[]): SelectableInvoice[] {
    return invoices.map((invoice): SelectableInvoice => ({
      checked: false,
      ...invoice
    }));
  }

  private buildPreview(invoices: Invoice[]): InvoicePreviewTable {
    const selectablesInvoice = this.createSelectableInvoices(invoices);
    const uniqueAddressesName = this.getUniqueAddresses(selectablesInvoice);
    const uniqueCategoriesName = this.getUniqueCategories(selectablesInvoice);

    const groups: SelectableInvoiceGroup[] = uniqueAddressesName.map(address => ({
      name: address,
      checked: false,
      items: selectablesInvoice.filter(invoice => invoice.place.address === address),
    }));

    if(this.addresses.length === 0) {
      this.addresses = uniqueAddressesName;
    }

    if(this.categories.length === 0) {
      this.categories = uniqueCategoriesName;
    }

    return {items: groups};
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

