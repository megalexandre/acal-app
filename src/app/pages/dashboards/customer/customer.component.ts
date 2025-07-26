import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalWithSent } from '../address/address.model';
import { ToastService } from '../dashboard/toast-service';
import { CustomerCreateComponent } from './create/customer-create.component';
import { Customer, CustomerFilter } from './customer.model';
import { CustomerService } from './customer.service';
import { CustomerDeleteComponent } from './delete/customer-delete.component';
import { CustomerEditComponent } from './edit/customer-edit.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {

    page: any;
    filter: CustomerFilter = {
      name: null,
      identity_card: null,
      page: 0,
      size: 10,
      sort_orders: [{ property: 'name', direction: 'ASC' }]
    };
    

  loading = true;

  constructor(
    private service: CustomerService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {

    this.search();
  }

  trackById(index: number, item: Customer): string {
    return item.id;
    }

 search(): void {
    this.loading = true;

    this.service.paginate(this.filter).subscribe({
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
    this.filter.page = newPage -1;
    this.search();
  }

  create(): void {
    this.openModal(CustomerCreateComponent);
  }

  edit(customer: Customer): void {
    this.openModal(CustomerEditComponent, { customer });
  }

  delete(customer: Customer): void {
    this.openModal(CustomerDeleteComponent, { customer });
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
