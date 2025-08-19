import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Invoice } from '../../invoice.model';
import { InvoiceService } from '../../invoice.service';

@Component({
  templateUrl: './invoice-cancel.component.html',
})
export class InvoiceCancelComponent {

  @Input() 
  public invoice!: Invoice;
  
  @Output() 
  public sent = new EventEmitter<void>();

  constructor(
    public activeModal: NgbActiveModal,
    private invoiceService: InvoiceService,
  ) {

  }
  
  confirm(){
    this.invoiceService.cancelPayment(this.invoice.id).subscribe({
      next: () => {
        this.close();
        this.sent.emit();
      },
      error: () => {}
    });
  }

  close() {
    this.activeModal.close();
  }
  
}
