import { Component } from '@angular/core';
import { Invoice } from '../invoice.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
})
export class InvoiceViewComponent {

  invoice!: Invoice;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

  
}
