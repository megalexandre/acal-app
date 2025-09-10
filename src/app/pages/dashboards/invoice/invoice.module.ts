
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgxMaskDirective } from 'ngx-mask';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceCreateComponent } from './create/invoice-create.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceCancelComponent } from './invoice-view/invoice-cancel/invoice-cancel.component';
import { InvoiceDeleteComponent } from './invoice-view/invoice-delete/invoice-delete.component';
import { InvoiceViewDetailComponent } from './invoice-view/invoice-view-detail/invoice-view-detail.component';
import { InvoiceViewHeaderComponent } from './invoice-view/invoice-view-header/invoice-view-header.component';
import { InvoiceViewReceiverComponent } from './invoice-view/invoice-view-receiver/invoice-view-receiver.component';
import { InvoiceViewWaterQualityComponent } from './invoice-view/invoice-view-water-quality/invoice-view-water-quality.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceCreateComponent,
    InvoiceViewComponent,
    InvoiceViewHeaderComponent,
    InvoiceViewDetailComponent,
    InvoiceViewWaterQualityComponent,
    InvoiceViewReceiverComponent,
    InvoiceCancelComponent,
    InvoiceDeleteComponent,
  ],
  imports: [
    SharedModule,
    InvoiceRoutingModule,
    CommonModule, 
    TranslateModule, 
    AcalModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbPaginationModule, 
    NgbTypeaheadModule, 
    NgbDropdownModule, 
    CountUpModule, 
    FeatherModule.pick(allIcons), 
    FlatpickrModule, 
    DataTablesModule,
    NgxMaskDirective,
  ],
  providers: [DatePipe],
})
export class InvoiceModule { }