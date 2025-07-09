import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardModule } from './card/card.module';
import { TableModule } from './table/table.module';
import { GroupPipe } from './pipe/group.pipe';
import { BooleanPipe } from './pipe/boolean.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    GroupPipe,
    BooleanPipe,
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
    GroupPipe,
    BooleanPipe,
  ],
})
export class AcalModule {}
