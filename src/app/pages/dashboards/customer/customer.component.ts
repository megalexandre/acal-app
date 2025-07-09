import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
export class CustomerComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  customeres: Customer[] = [];
  loading = true;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Usúarios', active: true }];
     this.search();
  }

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal,
    public toastService: ToastService,
  ) {}

  search() {
    this.loading = true;

    this.customerService.get().subscribe({
      next: (customeres) => {
        this.customeres = customeres;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.toastService
          .show("error", { classname: 'bg-danger text-white', delay: 15000 });
 
      },
    });
  }

  create() {
    this.openModal(CustomerCreateComponent);
  }

  delete(customer: Customer) {
    this.openModal(CustomerDeleteComponent, { customer });
  }

  edit(customer: Customer) {
    this.openModal(CustomerEditComponent, { customer });
  }

  openModal<T extends ModalWithSent>(component: Type<T>, data?: Partial<T>): void {
    const componentInstance = this.modalService
      .open(component, { centered: true })
      .componentInstance;

    if (data) {
      Object.assign(componentInstance, data);
    }

    componentInstance.sent.subscribe(() => this.search());
  }

}


