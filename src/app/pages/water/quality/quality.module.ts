import { PipeModule } from 'app/@pipe/pipe.module';
import { NgxMaskModule } from 'ngx-mask';
import { NbButtonModule, NbSpinnerModule, NbInputModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { QualityService } from './quality.service';
import { QualityRoutingModule } from './quality-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityComponent } from './quality.component';
import { QualityListComponent } from './quality-list/quality-list.component';
import { AcalModule } from 'app/@acal/acal.module';
import { QualityAddComponent } from './quality-add/quality-add.component';
import { QualityDeleteComponent } from './quality-delete/quality-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QualityEditComponent } from './quality-edit/quality-edit.component';

@NgModule({
  imports: [
    CommonModule,
    QualityRoutingModule,
    AcalModule,
    NbButtonModule,
    NbSpinnerModule,
    NbInputModule,
    NbIconModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    PipeModule,
  ],

  declarations: [
    QualityComponent,
    QualityListComponent,
    QualityAddComponent,
    QualityDeleteComponent,
    QualityEditComponent,
  ],

  providers:[
    QualityService,
  ]
})
export class QualityModule { }
