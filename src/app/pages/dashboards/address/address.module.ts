import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressCreateComponent } from './create/address-create.component';
import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressService } from './address.service';
import { AddressListComponent } from './list/address-list.component';
import { AddressDeleteComponent } from './delete/address-delete.component';
import { AddressEditComponent } from './edit/address-edit.component';
import { AddressSharedService } from './address-shared.service';

@NgModule({
  declarations: [
    AddressComponent, 
    AddressCreateComponent, 
    AddressListComponent,
    AddressDeleteComponent,
    AddressEditComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [
    AddressService,
    AddressSharedService
  ]
})
export class AddressModule {}
