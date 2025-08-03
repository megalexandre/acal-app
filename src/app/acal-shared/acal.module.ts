import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ButtonComponent } from './button/button.component';
import { CardModule } from './card/card.module';
import { DateInputComponent } from './input/date/date-input.component';
import { MonetaryInputComponent } from './input/monetary/monetary-input.component';
import { ReferenceInputComponent } from './input/reference/reference-input.component';
import { BooleanPipe } from './pipe/boolean.pipe';
import { GroupPipe } from './pipe/group.pipe';
import { AddressSelectComponent } from './select/address-select/address-select.component';
import { CategorySelectComponent } from './select/category-select/category-select.component';
import { TableModule } from './table/table.module';
import { PaginationComponent } from './pagination/pagination.component';
import { CpfCnpjValidator } from './validator/cpf.cnpj-validator';
import { CustomerSelectComponent } from './select/customer-select/customer-select.component';
import { YesOrNoSelectComponent } from './select/yes-or-no-select/yes-or-no-select.component';
import { PlaceSelectComponent } from './select/place-select/place-select.component';
import { GroupSelectComponent } from './select/group-select/group-select.component';
import { PlaceAddressSelectComponent } from './select/place-address-select/place-address-select.component';

@NgModule({
  declarations: [
    MonetaryInputComponent,
    ButtonComponent,
    GroupPipe,
    BooleanPipe,
    ReferenceInputComponent,
    DateInputComponent,
    CategorySelectComponent,
    PaginationComponent,
    CustomerSelectComponent,
    AddressSelectComponent,
    YesOrNoSelectComponent,  
    PlaceSelectComponent,
    GroupSelectComponent,
    PlaceAddressSelectComponent,
  ],

  imports: [
    CommonModule,
    CardModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],

  exports: [
    MonetaryInputComponent,
    ButtonComponent,
    CardModule,
    TableModule,
    GroupPipe,
    BooleanPipe,
    DateInputComponent,
    ReferenceInputComponent,
    CategorySelectComponent,
    AddressSelectComponent,
    PaginationComponent,
    CustomerSelectComponent,
    YesOrNoSelectComponent,
    PlaceSelectComponent,
    GroupSelectComponent,
    PlaceAddressSelectComponent,
  ],

  providers:[
    provideNgxMask(),
    CpfCnpjValidator,
  ]
  
})
export class AcalModule {}
