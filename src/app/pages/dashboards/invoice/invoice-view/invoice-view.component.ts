import { Component } from '@angular/core';
import { Invoice } from '../invoice.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceViewReceiverComponent } from './invoice-view-receiver/invoice-view-receiver.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
})
export class InvoiceViewComponent {

  invoice!: Invoice;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras?.state && navigation.extras.state['invoice']) {
      this.invoice = navigation.extras.state['invoice'];
    } else {
      this.back();
    }
  }

  back(){
    this.router.navigate(['../'], { relativeTo: this.route });
  }


  get status(): string {
    return this.invoice.paid_at ? 'Pago' : 'Aguardando'   
  }


  public receiver() {
    const modalRef = this.modalService.open(InvoiceViewReceiverComponent, { centered: true });
    modalRef.componentInstance.invoice = this.invoice;

    modalRef.componentInstance.sent.subscribe(() => {
      console.log('Invoice receiver modal closed with sent event');
    });
  }

  
}
