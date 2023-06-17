import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'homepage',
      loadChildren: () => import('./homepage/homepage.module')
        .then(m => m.HomepageModule),
    },
    {
      path: 'financial',
      loadChildren: () => import('./financial/financial.module')
        .then(m => m.FinancialModule),
    },
    {
      path: 'registration',
      loadChildren: () => import('./registration/registration.module')
        .then(m => m.RegistrationModule),
    },
    {
      path: 'water',
      loadChildren: () => import('./water/water.module')
        .then(m => m.WaterModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'homepage',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
