import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { ModalWithSent } from '../list/address-list.component';

@Component({
  selector: 'app-address-delete',
  templateUrl: './address-delete.component.html',
})
export class AddressDeleteComponent implements ModalWithSent {

  @Input() 
  public address!: Address;
  
  @Output() 
  public sent = new EventEmitter<void>();
  
  constructor(
    private addressService: AddressService,
    public activeModal: NgbActiveModal,
  ) {

  }

  close() {
    this.activeModal.dismiss('cancel');
  }

  confirm() {
    this.addressService.deleteAddress(this.address.id).subscribe({
      next: () => {
        this.close();
        this.sent.emit();
      }
    });
  }

}

