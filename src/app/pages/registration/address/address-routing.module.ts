import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressDeleteComponent } from './address-delete/address-delete.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressComponent } from './address.component';

const routes: Routes = [
  {
    path: '',
    component: AddressComponent,
    children: [
    {
      path: 'list',
      component: AddressListComponent
    },
    {
      path: 'add',
      component: AddressAddComponent
    },
    {
      path: 'edit',
      component: AddressEditComponent
    },
    {
      path: 'delete',
      component: AddressDeleteComponent
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', redirectTo: 'list' },
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
export class AddressRoutingModule {
}

