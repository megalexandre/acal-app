import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithSent } from '../../address/address.model';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-customer-delete',
    templateUrl: './customer-delete.component.html',
    standalone: false
})
export class CustomerDeleteComponent implements ModalWithSent {

  @Input() 
  public customer!: Customer;
  
  @Output() 
  public sent = new EventEmitter<void>();
  
  constructor(
    private customerService: CustomerService,
    public activeModal: NgbActiveModal,
  ) {

  }

  close() {
    this.activeModal.dismiss('cancel');
  }

  confirm() {
    this.customerService.delete(this.customer.id).subscribe({
      next: () => {
        this.close();
        this.sent.emit();
      }
    });
  }

}

