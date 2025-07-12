import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardModule } from './card/card.module';
import { TableModule } from './table/table.module';
import { GroupPipe } from './pipe/group.pipe';
import { BooleanPipe } from './pipe/boolean.pipe';
import { ReferenceInputComponent } from './reference/reference-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
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
