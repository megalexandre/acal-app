import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../address.service';
import { Location } from '@angular/common';
import { Address } from '../address.model';
import { AddressSharedService } from '../address-shared.service';
import { ba } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html'
})
export class AddressEditComponent implements OnInit {
  addressForm: FormGroup;
  address: Address | null = null;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private shared: AddressSharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required]
    });
  }


ngOnInit(): void {
  this.shared.selectedAddress$.subscribe(address => {
    if (address) {
      this.address = address;
      this.addressForm.patchValue({ name: this.address.name });
    } else {
        this.back();
    }
  });
}

  onSubmit() {
    if (this.addressForm.valid && this.address) {
      const updated: Address = { ...this.address, ...this.addressForm.value };
      this.addressService.updateAddress(updated).subscribe(() => {
        this.back();
      });
    }
  }

  back(){
    this.router.navigate(['../'], { relativeTo: this.route })
  }
}
