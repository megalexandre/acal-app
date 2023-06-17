import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbStepperModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { LinkAddComponent } from './link-add/link-add.component';
import { LinkFilterComponent } from './link-filter/link-filter.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkReviewComponent } from './link-review/link-review.component';
import { LinkRoutingModule } from './link-routing.module';
import { LinkViewComponent } from './link-view/link-view.component';
import { LinkComponent } from './link.component';
import { LinkService } from './link.service';
import { LinkInactiveComponent } from './link-inactive/link-inactive.component';

@NgModule({

  imports: [
    CommonModule,
    LinkRoutingModule,
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
    NgxMaskModule.forChild(),
    NbStepperModule,
    ComponentModule,
    NbSelectModule,
    NbAccordionModule,
    NbRadioModule,
  ],
  declarations: [
    LinkComponent,
    LinkListComponent,
    LinkAddComponent,
    LinkViewComponent,
    LinkReviewComponent,
    LinkFilterComponent,
    LinkInactiveComponent,
  ],
  providers: [
    LinkService
  ]
})
export class LinkModule { }
