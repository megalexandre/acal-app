import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbSpinnerModule, NbWindowModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { LinkService } from 'app/pages/registration/link/link.service';
import { NgxMaskModule } from 'ngx-mask';
import { InvoiceGenerateComponent } from './invoice-generate/invoice-generate.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutingModule } from './invoice.routing.module';
import { InvoiceService } from './invoice.service';
import { InvoiceSelectComponent } from './invoice-select/invoice-select.component';
import { InvoicePayComponent } from './invoice-pay/invoice-pay.component';
import { ComponentModule } from 'app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NbCardModule,
    NbSpinnerModule,
    NbInputModule,
    NbCheckboxModule,
    AcalModule,
    PipeModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    NbWindowModule.forChild(),
    NbCardModule,
    NbDatepickerModule,
    NbIconModule,
    NbDialogModule.forChild(),
    ComponentModule,
  ],
  declarations: [
    InvoiceComponent,
    InvoiceGenerateComponent,
    InvoiceSelectComponent,
    InvoiceListComponent,
    InvoiceViewComponent,
    InvoicePayComponent,
  ],
  providers: [
    LinkService,
    InvoiceService,
  ]
})
export class InvoiceModule { }
