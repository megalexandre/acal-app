import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Pages
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DashboardBlogComponent } from './dashboard-blog/dashboard-blog.component';
import { JobComponent } from './job/job.component';
import { NftComponent } from './nft/nft.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then((m) => m.AddressModule),
  },
  {
    path: 'places',
    loadChildren: () => import('./place/place.module').then((m) => m.PlaceModule),
  },
    {
    path: 'categories',
    loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
  },

  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'crm',
    component: CrmComponent,
  },
  {
    path: 'crypto',
    component: CryptoComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'nft',
    component: NftComponent,
  },
  {
    path: 'job',
    component: JobComponent,
  },
  {
    path: 'dashboard-blog',
    component: DashboardBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
