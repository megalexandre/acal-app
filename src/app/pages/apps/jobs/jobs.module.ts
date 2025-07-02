import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbTooltipModule, NgbPaginationModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component
import { ApplicationComponent } from './application/application.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NewjobComponent } from './newjob/newjob.component';
import { CompanieslistComponent } from './companieslist/companieslist.component';
import { JobcategoriesComponent } from './jobcategories/jobcategories.component';

// Routing
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobListsModule } from './job-lists/job-lists.module';
import { CandidateListsModule } from './candidate-lists/candidate-lists.module';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';


// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Ng Select
import { NgSelectModule } from '@ng-select/ng-select';
// Load Icon
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';


@NgModule({
  declarations: [
    ApplicationComponent,
    StatisticsComponent,
    NewjobComponent,
    CompanieslistComponent,
    JobcategoriesComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    NgApexchartsModule,
    FeatherModule.pick(allIcons),
    NgbDropdownModule,
    JobListsModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbNavModule,
    CandidateListsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobsModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
