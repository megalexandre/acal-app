import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Address, ModalWithSent } from '../address/address.model';
import { ToastService } from '../dashboard/toast-service';
import { Invoice, InvoiceFilter } from './invoice.model';
import { InvoiceService } from './invoice.service';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoiceViewReceiverComponent } from './invoice-view/invoice-view-receiver/invoice-view-receiver.component';
import { InvoiceCancelComponent } from './invoice-view/invoice-cancel/invoice-cancel.component';
import { InvoiceDeleteComponent } from './invoice-view/invoice-delete/invoice-delete.component';
import { AddressService } from '../address/address.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{

  page: any;
  filter: InvoiceFilter;
  loading = false;

  public addresses: Address[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private addressService: AddressService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {
    this.filter = this.initializeFilter();
  }

  ngOnInit(): void {
    this.search();

    this.addressService.get().subscribe({
      next: (addresses) => {
        this.addresses = addresses.sort((a, b) => a.name.localeCompare(b.name));;
      },
      error: () => {
        this.addresses = [];
      }
    });
  }

  search(): void {
    this.loading = true;

    this.invoiceService.paginate(this.filter).subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

print() {
  this.invoiceService.print(this.filter).subscribe({
    next: (bytes) => {
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      window.open(url, '_blank');

    },
    error: () => {
      this.toastService.show('Erro ao realizar o download do arquivo.');
    }
  });
}

  clear(){
    this.filter = this.initializeFilter();
    this.search();
  }

  initializeFilter(): InvoiceFilter {
    return {
      address: null,
      reference: null,
      number: null,
      status: null,
      page: 0,
      size: 10,
      sort_orders: [{ property: 'created_at', direction: 'DESC' }]
    };
  }

  onPageChange(newPage: number) {
    this.filter.page = newPage -1 ; 
    this.search();
  }

  onDoubleClick(invoice: Invoice){
    this.view(invoice)
  }

  view(invoice: Invoice): void {
    this.router.navigate(['view'], {relativeTo: this.route, state: { invoice } });
  }


  receiver(invoice: Invoice): void {
    const modalRef = this.modalService.open(InvoiceViewReceiverComponent, { centered: true });
    modalRef.componentInstance.invoice = invoice;

    modalRef.componentInstance.sent.subscribe(() => {
      this.toastService.show('Recebimento realizado com sucesso!');
      this.search();
    });

  }
  
  cancel(invoice: Invoice): void {
    const modalRef = this.modalService.open(InvoiceCancelComponent, { centered: true });
    modalRef.componentInstance.invoice = invoice;

    modalRef.componentInstance.sent.subscribe(() => {
      this.toastService.show('Recebimento realizado com sucesso!');
      this.search();
    });

  }


  delete(invoice: Invoice): void {
    const modalRef = this.modalService.open(InvoiceDeleteComponent, { centered: true });
    modalRef.componentInstance.invoice = invoice;

    modalRef.componentInstance.sent.subscribe(() => {
      this.toastService.show('Recebimento realizado com sucesso!');
      this.search();
    });

  }



  create(): void {
     this.router.navigate(['create'], { relativeTo: this.route });
  }

  edit(invoice: Invoice): void {
    //this.openModal(InvoiceEditComponent, { invoice });
  }

  openModal<T>(
    component: Type<T>,
    data?: Partial<T>
  ): void {
    const modalRef = this.modalService.open(component, { centered: true });
    const componentInstance = modalRef.componentInstance;

    if (data) {
      Object.assign(componentInstance, data);
    }

    componentInstance.sent.subscribe(() => this.search());
  }

}
