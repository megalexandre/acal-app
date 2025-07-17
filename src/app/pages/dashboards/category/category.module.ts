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
import { CategoryCreateComponent } from './create/category-create.component';
import { CategoryDeleteComponent } from './delete/category-delete.component';
import { CategoryEditComponent } from './edit/category-edit.component';

@NgModule({
  declarations: [
    CategoryComponent, 
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
  ],
  imports: [
    CategoryRoutingModule,
    FeatherModule.pick(allIcons), 
    NgbPaginationModule, 
    CommonModule, 
    SharedModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    AcalModule,
  ],
  providers: [
    CategoryService,
  ],
})
export class CategoryModule {
}
