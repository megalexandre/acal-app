import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalWithSent } from '../address/address.model';
import { ToastService } from '../dashboard/toast-service';
import { Invoice, InvoiceFilter } from './invoice.model';
import { InvoiceService } from './invoice.service';
import { P } from '@fullcalendar/core/internal-common';
import { Page } from '../link/link.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{

  page: any;
  filter: InvoiceFilter = {
    page: 0,
    size: 10,
    sort_orders: [{ property: 'created_at', direction: 'DESC' }]
  };

  invoices: Invoice[] = [];

  loading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {}

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

  onPageChange(newPage: number) {
    this.filter.page = newPage -1 ; // Adjust for zero-based index
    this.search();
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

  openModal<T extends ModalWithSent>(
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
