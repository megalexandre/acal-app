import { Component, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { Address, ModalWithSent } from './address.model';
import { AddressService } from './address.service';
import { AddressCreateComponent } from './create/address-create.component';
import { AddressDeleteComponent } from './delete/address-delete.component';
import { AddressEditComponent } from './edit/address-edit.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  addresses: Address[] = [];
  loading = true;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Endereços', active: true }];
     this.search();
  }

  constructor(
    private addressService: AddressService,
    public service: PaginationService,
    private modalService: NgbModal,
  ) {}

  search() {
    this.loading = true;

    this.addressService.getAddresses().subscribe({
      next: (addresses) => {
        this.addresses = addresses;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  create() {
    this.openModal(AddressCreateComponent);
  }

  delete(address: Address) {
    this.openModal(AddressDeleteComponent, { address });
  }

  edit(address: Address) {
    this.openModal(AddressEditComponent, { address });
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


