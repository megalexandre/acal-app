import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: 'address',
        loadChildren: () => import('../registration/address/address.module')
          .then(m => m.AddressModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('../registration/customer/customer.module')
          .then(m => m.CustomerModule),
      },
      {
        path: 'group',
        loadChildren: () => import('../registration/group/group.module')
          .then(m => m.GroupModule),
      },
      {
        path: 'place',
        loadChildren: () => import('../registration/place/place.module')
          .then(m => m.PlaceModule),
      },
      {
        path: 'link',
        loadChildren: () => import('../registration/link/link.module')
          .then(m => m.LinkModule),
      },
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: '**', redirectTo: 'customer' },
    ]
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
export class RegistrationRoutingModule {
}

