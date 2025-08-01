import { Component, Input } from '@angular/core';
import { Invoice } from '../../invoice.model';

@Component({
  selector: 'app-invoice-view-water-quality',
  templateUrl: './invoice-view-water-quality.component.html',
})
export class InvoiceViewWaterQualityComponent {

    @Input()
    public invoice!: Invoice;
    
    ngOnInit(): void {
     
    }
}
