
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoicesRoutingModule } from '../../invoices/invoices-routing.module';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { InvoiceCreateComponent } from './create/invoice-create.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceCreateComponent,
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
    InvoicesRoutingModule, 

    DataTablesModule,
  ],
  providers: [DatePipe],
})
export class InvoiceModule { }