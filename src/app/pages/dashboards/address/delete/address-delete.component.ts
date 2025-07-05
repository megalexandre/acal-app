import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { Location } from '@angular/common';
import { AddressSharedService } from '../address-shared.service';

@Component({
  selector: 'app-address-delete',
  templateUrl: './address-delete.component.html',
})
export class AddressDeleteComponent {
  address: Address | null = null;

  constructor(
    private addressService: AddressService,
    private shared: AddressSharedService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.shared.selectedAddress$.subscribe((address) => {
      if (address) {
        this.address = address;
      } else {
        this.back();
      }
    });
  }

  confirmDelete() {
    if (this.address) {
      this.addressService.deleteAddress(this.address.id).subscribe({
        next: () => this.back(),
      });
    }
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
