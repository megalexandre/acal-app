import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityComponent } from './security.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,

    children: [
      {
        path: 'user',
        loadChildren: () => import('./user/user.module')
          .then(m => m.UserModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'users',
      },
    ],

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SecurityRoutingModule {
}

