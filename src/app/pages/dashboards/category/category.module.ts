import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryService } from './category.service';
import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [
    CategoryComponent, 
  ],
  imports: [
    FeatherModule.pick(allIcons), 
    CommonModule, 
    SharedModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    NgbPaginationModule, 
    AcalModule,
    CategoryRoutingModule, 
  ],
  providers: [
    CategoryService,
  ],
})
export class CategoryModule {
}
