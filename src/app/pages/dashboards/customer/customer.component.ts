import { Component, OnDestroy, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

import { CustomerService } from './customer.service';
import { ToastService } from '../dashboard/toast-service';
import { Customer } from './customer.model';
import { ModalWithSent } from '../address/address.model';
import { CustomerCreateComponent } from './create/customer-create.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerDeleteComponent } from './delete/customer-delete.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit, OnDestroy {

  breadCrumbItems: Array<{ label: string; active?: boolean }> = [];

  customeres: Customer[] = [];

  dtOptions = {};
  dtTrigger: Subject<void> = new Subject<void>();

  loading = true;

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Dashboards' },
      { label: 'Usuários', active: true }
    ];

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      processing: true
    };

    this.search();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  search(): void {
    this.loading = true;

    this.customerService.get().subscribe({
      next: (customers) => {
        this.customeres = customers;
        this.dtTrigger.next();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.show("Erro ao carregar dados.", {
          classname: 'bg-danger text-white',
          delay: 15000
        });
      }
    });
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
