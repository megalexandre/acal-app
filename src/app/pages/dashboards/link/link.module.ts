import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinkService } from './link.service';
import { LinkRoutingModule } from './link-routing.module';
import { LinkComponent } from './link.component';
import { LinkCreateComponent } from './create/link-create.component';
import { LinkDeleteComponent } from './delete/link-delete.component';

@NgModule({
  declarations: [
    LinkComponent, 
    LinkCreateComponent,
    LinkDeleteComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    LinkRoutingModule,
    FeatherModule.pick(allIcons), 
    NgbPaginationModule, 
    SharedModule, 
    TranslateModule, 
    AcalModule,
  ],
  providers: [
    LinkService,
  ],
})
export class LinkModule {
}
