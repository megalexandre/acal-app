import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { AddressListComponent } from './list/address-list.component';

const routes: Routes = [
  {
    path: '',
    component: AddressComponent,
    children: [
      { path: '', component: AddressListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}
