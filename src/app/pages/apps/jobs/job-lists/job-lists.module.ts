import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// routing
import { JobListsRoutingModule } from './job-lists-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Component
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { OverviewComponent } from './overview/overview.component';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    ListComponent,
    GridComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    JobListsRoutingModule,
    SharedModule,
    NgbPaginationModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    FlatpickrModule.forRoot(),
  ]
})
export class JobListsModule { }
