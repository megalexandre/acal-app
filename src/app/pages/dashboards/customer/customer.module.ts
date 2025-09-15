import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerCreateComponent } from './create/customer-create.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerDeleteComponent } from './delete/customer-delete.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    CustomerComponent, 
    CustomerCreateComponent, 
    CustomerEditComponent,
    CustomerDeleteComponent, 
  ],
  imports: [
    FeatherModule.pick(allIcons), 
    CommonModule, 
    CustomerRoutingModule, 
    SharedModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    NgbPaginationModule, 
    DataTablesModule,
    AcalModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    CustomerService,
  ],
})
export class CustomerModule {
}
