import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FinancialRecordComponent } from './financial-record.component';
import { FinancialRecordService } from './financial-record.service';
import { FinancialRecordRoutingModule } from './financial-record-routing.module';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [
    FinancialRecordComponent, 
  ],
  imports: [
    FeatherModule.pick(allIcons), 
    CommonModule, 
    SharedModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    NgbPaginationModule, 
    DataTablesModule,
    AcalModule,
    FormsModule,
    FinancialRecordRoutingModule,
    FlatpickrModule,
  ],
  providers: [
    FinancialRecordService,
  ],
})
export class FinancialRecordModule {
}
