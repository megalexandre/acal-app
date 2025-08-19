import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalWithSent } from '../address/address.model';
import { ToastService } from '../dashboard/toast-service';
import { Invoice, InvoiceFilter } from './invoice.model';
import { InvoiceService } from './invoice.service';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoiceViewReceiverComponent } from './invoice-view/invoice-view-receiver/invoice-view-receiver.component';
import { InvoiceCancelComponent } from './invoice-view/invoice-cancel/invoice-cancel.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{

  page: any;
  filter: InvoiceFilter;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {
    this.filter = this.initializeFilter();
  }

  ngOnInit(): void {
    this.search();
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

  clear(){
    this.filter = this.initializeFilter();
    this.search();
  }

  initializeFilter(): InvoiceFilter {
    return {
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
  create(): void {
     this.router.navigate(['create'], { relativeTo: this.route });
  }

  edit(invoice: Invoice): void {
    //this.openModal(InvoiceEditComponent, { invoice });
  }

  delete(invoice: Invoice): void {
    //this.openModal(InvoiceDeleteComponent, { invoice });
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
