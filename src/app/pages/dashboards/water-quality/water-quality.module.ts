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
import { WaterQualityComponent } from './water-quality.component';
import { WaterQualityService } from './water-quality.service';
import { WaterQualityRoutingModule } from './water-quality-routing.module';
import { WaterQualityCreateComponent } from './create/water-quality-create.component';
import { WaterQualityDeleteComponent } from './delete/water-quality-delete.component';

@NgModule({
  declarations: [
    WaterQualityComponent, 
    WaterQualityCreateComponent,
    WaterQualityDeleteComponent,
  ],
  imports: [
    FeatherModule.pick(allIcons), 
    CommonModule, 
    WaterQualityRoutingModule, 
    SharedModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    NgbPaginationModule, 
    AcalModule,
    FormsModule,
    DataTablesModule,
  ],
  providers: [
     WaterQualityService,
  ],
})
export class  WaterQualityModule {
}
