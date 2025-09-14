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
import { WaterMeterCreateComponent } from './create/water-meter-create.component';
import { WaterMeterRoutingModule } from './water-meter-routing.module';
import { WaterMeterComponent } from './water-meter.component';
import { WaterMeterService } from './water-meter.service';
import { NgxMaskDirective } from 'ngx-mask';

@NgModule({
  declarations: [
    WaterMeterComponent, 
    WaterMeterCreateComponent,
  ],
  imports: [
    FeatherModule.pick(allIcons), 
    WaterMeterRoutingModule, 
    CommonModule, 
    SharedModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    NgbPaginationModule, 
    AcalModule,
    FormsModule,
    DataTablesModule,
    NgxMaskDirective
  ],
  providers: [
     WaterMeterService,
  ],
})
export class  WaterMeterModule {
}
