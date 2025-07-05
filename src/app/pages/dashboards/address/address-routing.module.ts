import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressCreateComponent } from './create/address-create.component';
import { AddressComponent } from './address.component';
import { AddressListComponent } from './list/address-list.component';
import { AddressDeleteComponent } from './delete/address-delete.component';
import { AddressEditComponent } from './edit/address-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AddressComponent,
    children: [
      { path: '', component: AddressListComponent },
      { path: 'delete', component: AddressDeleteComponent },
      { path: 'edit', component: AddressEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}
