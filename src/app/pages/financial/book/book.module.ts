import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbRadioModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { BookService } from './book.service';
import { BookFilterComponent } from './book-filter/book-filter.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    BookRoutingModule,
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
    ComponentModule,
    NgxMaskModule.forChild(),
    NbAccordionModule,
    NbRadioModule,
    NbDatepickerModule,
    NgxMaskModule,
    ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookFilterComponent,
  ],
  providers:[
    BookService,
  ]

})
export class BookModule { }
