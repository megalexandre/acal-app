import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ButtonComponent } from './button/button.component';
import { CardModule } from './card/card.module';
import { MonetaryInputComponent } from './input/reference/monetary/monetary-input.component';
import { ReferenceInputComponent } from './input/reference/reference-input.component';
import { BooleanPipe } from './pipe/boolean.pipe';
import { GroupPipe } from './pipe/group.pipe';
import { TableModule } from './table/table.module';

@NgModule({
  declarations: [
    MonetaryInputComponent,
    ButtonComponent,
    GroupPipe,
    BooleanPipe,
    ReferenceInputComponent,
  ],

  imports: [
    CommonModule,
    CardModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],

  exports: [
    MonetaryInputComponent,
    ButtonComponent,
    CardModule,
    TableModule,
    GroupPipe,
    BooleanPipe,
    ReferenceInputComponent,
  ],
  providers:[
    provideNgxMask(),
  ]
  
})
export class AcalModule {}
