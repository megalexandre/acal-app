import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address, ModalWithSent } from '../address.model';
import { AddressService } from '../address.service';
import { ToastrService } from 'ngx-toastr';

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
    private activeModal: NgbActiveModal,
    private t: ToastrService,
  ) {

  }

  close() {
    this.activeModal.dismiss('cancel');
  }

  confirm() {
    this.addressService.delete(this.address.id).subscribe({
      next: () => {
        this.t.success("Deletado com sucesso!")
        this.close();
        this.sent.emit();
      }
    });
  }

}

