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
import { IdentificationInputComponent } from './input/identification/identification.component';
import { ReferencePipe } from './pipe/reference.pipe';
import { ReasonPipe } from './pipe/reason.pipe';
import { SumByKeyPipe } from './pipe/sum-by-key.pipe.ts.pipe';
import { CategoryPipe } from './pipe/category.pipe';


const PIPES = [  
  GroupPipe,
  BooleanPipe,
  ReferencePipe,
  ReasonPipe,
  SumByKeyPipe,
  CategoryPipe,
]

const COMPONENTS = [
  MonetaryInputComponent,
  ButtonComponent,
]

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],

  declarations: [
    ...PIPES,
    ...COMPONENTS,

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
    YesOrNoSelectComponent,
    IdentificationInputComponent,
    
  ],


  exports: [
    ...PIPES,
    ...COMPONENTS,
    MonetaryInputComponent,
    CardModule,
    TableModule,
   
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
    YesOrNoSelectComponent,
    IdentificationInputComponent,
  ],

  providers:[
    provideNgxMask(),
    CpfCnpjValidator,
  ]
  
})
export class AcalModule {}
