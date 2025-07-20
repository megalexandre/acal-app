import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalWithSent } from '../address/address.model';
import { ToastService } from '../dashboard/toast-service';
import { Invoice } from './invoice.model';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{

  breadCrumbItems: Array<{ label: string; active?: boolean }> = [];

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
    this.breadCrumbItems = [
      { label: 'Dashboards' },
      { label: 'Faturas', active: true }
    ];


    this.search();
  }


  search(): void {
    this.loading = true;

    this.invoiceService.get().subscribe({
      next: (invoices) => {
        this.invoices = invoices;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
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
