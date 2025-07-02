import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { StatisticsComponent } from './statistics/statistics.component';
import { ApplicationComponent } from './application/application.component';
import { NewjobComponent } from './newjob/newjob.component';
import { CompanieslistComponent } from './companieslist/companieslist.component';
import { JobcategoriesComponent } from './jobcategories/jobcategories.component';

const routes: Routes = [
  {
    path: "statistics",
    component: StatisticsComponent
  },
  {
    path: "application",
    component: ApplicationComponent
  },
  {
    path: "newjob",
    component: NewjobComponent
  },
  {
    path: "companies-list",
    component: CompanieslistComponent
  },
  {
    path: "job-categories",
    component: JobcategoriesComponent
  },
  {
    path: 'job-lists', loadChildren: () => import('./job-lists/job-lists.module').then(m => m.JobListsModule)
  },
  {
    path: 'candidate-lists', loadChildren: () => import('./candidate-lists/candidate-lists.module').then(m => m.CandidateListsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
