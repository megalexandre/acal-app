import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlaceComponent } from './place.component';
import { PlaceService } from './place.service';
import { PlaceRoutingModule } from './place-routing.module';
import { PlaceCreateComponent } from './create/place-create.component';

@NgModule({
  declarations: [
    PlaceComponent, 
    PlaceCreateComponent,
  ],
  imports: [
    FeatherModule.pick(allIcons), 
    CommonModule, 
    SharedModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    NgbPaginationModule, 
    AcalModule,
    PlaceRoutingModule, 
  ],
  providers: [
    PlaceService,
  ],
})
export class PlaceModule {
}
