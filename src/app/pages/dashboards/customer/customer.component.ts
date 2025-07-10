import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from './customer.service';
import { ToastService } from '../dashboard/toast-service';
import { Customer } from './customer.model';
import { ModalWithSent } from '../address/address.model';
import { CustomerCreateComponent } from './create/customer-create.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerDeleteComponent } from './delete/customer-delete.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  name: string | null = null;
  identification: string | null = null;

  customeres: Customer[] = [];
  filteredCustomeres: Customer[] = [];
  loading = true;

  private filterSubject = new Subject<void>();

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Usúarios', active: true }];
     this.search();

      this.filterSubject.pipe(
        debounceTime(300)  
      ).subscribe(() => this.applyFilter());
  }

  onFilterChange() {
    this.filterSubject.next();
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
        this.filteredCustomeres = customeres;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.toastService
          .show("error", { classname: 'bg-danger text-white', delay: 15000 });
 
      },
    });
  }

  applyFilter() {
    this.filteredCustomeres = this.customeres.filter(customer => {
      const matchesName = this.name ? customer.name.toLowerCase().includes(this.name.toLowerCase()) : true;
      const matchesId = this.identification ? customer.identity_card.toLowerCase().includes(this.identification.toLowerCase()) : true;
      return matchesName && matchesId;
    });
  }

  trackById(index: number, item: Customer): string {
    return item.id;
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


