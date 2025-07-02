import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Ng Search 
import { NgPipesModule } from 'ngx-pipes';

// FlatPicker
import { FlatpickrModule } from 'angularx-flatpickr';

// Load Icon
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';

// Component pages
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { GridjsComponent } from './gridjs/gridjs.component';
import { ListjsComponent } from './listjs/listjs.component';
import { NgbdOrdersSortableHeader } from './listjs/listjs-sortable.directive'


@NgModule({ declarations: [
        BasicComponent,
        GridjsComponent,
        ListjsComponent,
        NgbdOrdersSortableHeader
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDropdownModule,
        NgbPaginationModule,
        NgbTypeaheadModule,
        FlatpickrModule,
        TablesRoutingModule,
        SharedModule,
        SimplebarAngularModule,
        NgPipesModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class TablesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
