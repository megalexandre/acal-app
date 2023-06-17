import { ComponentModule } from 'app/component/component.module';
import { AddressService } from './../address/address.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { NgxMaskModule } from 'ngx-mask';
import { PlaceAddComponent } from './place-add/place-add.component';
import { PlaceDeleteComponent } from './place-delete/place-delete.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceRoutingModule } from './place-routing.module';
import { PlaceComponent } from './place.component';
import { PlaceService } from './place.service';

@NgModule({
  imports: [
    CommonModule,
    PlaceRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    AcalModule,
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    PipeModule,
    NbFormFieldModule,
    NgxMaskModule.forChild(),
    NbSelectModule,
    ComponentModule,
    NbCheckboxModule,
  ],
  declarations: [
    PlaceComponent,
    PlaceListComponent,
    PlaceAddComponent,
    PlaceEditComponent,
    PlaceDeleteComponent,
  ],
  providers: [
    PlaceService,
    AddressService,
  ]
})
export class PlaceModule { }
