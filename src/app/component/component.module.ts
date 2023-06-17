import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { AddressService } from 'app/pages/registration/address/address.service';
import { GroupService } from 'app/pages/registration/group/group.service';
import { NgxMaskModule } from 'ngx-mask';
import { AcalModule } from './../@acal/acal.module';
import { PipeModule } from './../@pipe/pipe.module';
import { CustomerService } from './../pages/registration/customer/customer.service';
import { PlaceService } from './../pages/registration/place/place.service';
import { SelectAddressComponent } from './select-address/select-address.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectGroupComponent } from './select-group/select-group.component';
import { SelectPlaceComponent } from './select-place/select-place.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputDateTimeComponent } from './input-date-time/input-date-time.component';
import { PickTypeComponent } from './pick-type/pick-type.component';
import { PickReasonComponent } from './pick-reason/pick-reason.component';

const PIPES = [
  SelectGroupComponent,
  SelectUserComponent,
  SelectPlaceComponent,
  SelectAddressComponent,
  SelectCategoryComponent,
  InputCurrencyComponent,
  InputDateComponent,
  InputDateTimeComponent,
  PickTypeComponent,
  PickReasonComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    AcalModule,
    NbFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NbSpinnerModule,
    NgxMaskModule.forChild(),
    NbSelectModule,
  ],
  declarations: [
    ...PIPES,
  ],
  exports:[
    ...PIPES,
  ],
  providers:[
    AddressService,
    CustomerService,
    PlaceService,
    GroupService,
  ]
})
export class ComponentModule { }
