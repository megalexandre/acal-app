import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
    ButtonComponent,
  ],

  imports: [
    CommonModule,
    CardModule,
  ],

  exports: [
    ButtonComponent,
    CardModule,
  ],
})
export class AcalModule {}
