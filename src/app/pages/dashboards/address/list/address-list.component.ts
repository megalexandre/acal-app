import { Component, EventEmitter, OnInit, TemplateRef, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { AddressCreateComponent } from '../create/address-create.component';
import { AddressDeleteComponent } from '../delete/address-delete.component';
import { AddressEditComponent } from '../edit/address-edit.component';


export interface ModalWithSent {
  sent: EventEmitter<any>;
}

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
})

export class AddressListComponent implements OnInit {
  addresses: Address[] = [];
  loading = true;

  constructor(
    private addressService: AddressService,
    public service: PaginationService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.search();
  }

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

  openModal<T extends ModalWithSent>(component: Type<T>, data?: Partial<T>) {
    const modalRef = this.modalService.open(component, { centered: true });
    const componentInstance = modalRef.componentInstance;

    if (data) {
      Object.assign(componentInstance, data);
    }

    componentInstance.sent.subscribe(() => this.search());
  }

}
