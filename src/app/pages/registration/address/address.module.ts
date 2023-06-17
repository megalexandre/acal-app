import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { NgxMaskModule } from 'ngx-mask';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressDeleteComponent } from './address-delete/address-delete.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressService } from './address.service';

@NgModule({
  imports: [
    CommonModule,
    AddressRoutingModule,
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
  ],
  declarations: [
    AddressComponent,
    AddressListComponent,
    AddressAddComponent,
    AddressEditComponent,
    AddressDeleteComponent,
  ],
  providers: [
    AddressService,
  ]
})
export class AddressModule { }
