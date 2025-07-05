import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AcalModule } from 'src/app/acal-shared/acal.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressRoutingModule } from './address-routing.module';
import { AddressSharedService } from './address-shared.service';
import { AddressComponent } from './address.component';
import { AddressService } from './address.service';
import { AddressCreateComponent } from './create/address-create.component';
import { AddressDeleteComponent } from './delete/address-delete.component';
import { AddressEditComponent } from './edit/address-edit.component';
import { AddressListComponent } from './list/address-list.component';

@NgModule({
  declarations: [AddressComponent, AddressCreateComponent, AddressListComponent, AddressDeleteComponent, AddressEditComponent],
  imports: [FeatherModule.pick(allIcons), CommonModule, AddressRoutingModule, SharedModule, TranslateModule, ReactiveFormsModule, NgbPaginationModule, AcalModule],
  providers: [AddressService, AddressSharedService],
})
export class AddressModule {}
