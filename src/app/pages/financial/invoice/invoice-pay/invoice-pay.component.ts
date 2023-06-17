import { Component, Input } from '@angular/core';
import { Invoice } from '@model/default/invoice';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-invoice-pay',
  templateUrl: './invoice-pay.component.html',
  styleUrls: ['./invoice-pay.component.scss']
})
export class InvoicePayComponent {

  @Input()
  invoice: Invoice;
  user: any

  constructor(
    private authService: NbAuthService,
    private service: InvoiceService,
    private activatedRoute: ActivatedRoute,
    protected dialogRef: NbDialogRef<InvoicePayComponent>,
    private router: Router,
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

      if (token.isValid()) {
        this.user = token.getPayload();
      }

    });
  }

  pay(){
    this.service.pay(this.invoice.id).subscribe(
      ()=> {
        this.dialogRef.close();
        this.router.navigate(['./list'],{relativeTo: this.activatedRoute});
      }
    )
  }

  sumInvoiceValues(invoice: Invoice): number {
    return invoice.invoiceDetails.map(d => d.value).reduce((prev,next) => prev+ next)
  }

}
