import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HydrometerAddComponent } from './hydrometer-add/hydrometer-add.component';
import { HydrometerDeleteComponent } from './hydrometer-delete/hydrometer-delete.component';
import { HydrometerListComponent } from './hydrometer-list/hydrometer-list.component';
import { HydrometerRoutingModule } from './hydrometer-routing.module';
import { HydrometerService } from './hydrometer.service';
import { HydrometerComponent } from './hydrometer.component';
import { NbAccordionModule, NbButton, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HydrometerSelectReferenceComponent } from './hydrometer-select-reference/hydrometer-select-reference.component';

@NgModule({
  imports: [
    CommonModule,
    HydrometerRoutingModule,
    NbCardModule,
    AcalModule,
    NbSpinnerModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    NbInputModule,
    NbAccordionModule,
    NbButtonModule,
    NgxMaskModule.forChild(),
    NbCheckboxModule,
  ],

  declarations: [
    HydrometerComponent,
    HydrometerAddComponent,
    HydrometerListComponent,
    HydrometerDeleteComponent,
    HydrometerSelectReferenceComponent,
  ],

  providers:[
    HydrometerService
  ]

})
export class HydrometerModule { }
