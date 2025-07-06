import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import { CardTitleComponent } from './card-title.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardTitleComponent,
  ],
  imports: [CommonModule],
  
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardTitleComponent
  ]
})
export class CardModule {}