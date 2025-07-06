import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardModule } from './card/card.module';
import { TableModule } from './table/table.module';

@NgModule({
  declarations: [
    ButtonComponent,
  ],

  imports: [
    CommonModule,
    CardModule,
    TableModule,
  ],

  exports: [
    ButtonComponent,
    CardModule,
    TableModule,
  ],
})
export class AcalModule {}
