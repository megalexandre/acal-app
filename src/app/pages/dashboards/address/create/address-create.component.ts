import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AddressService } from '../address.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html'
})
export class AddressCreateComponent {
  
  addressForm: FormGroup;

  constructor(
      private fb: FormBuilder, 
      private addressService: AddressService,
      private router: Router,
      private route: ActivatedRoute  
  ) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.addressForm.valid) {
        this.addressService.createAddress(this.addressForm.value).subscribe({
            next: () => this.back(),
            error: () => this.addressForm.reset()
        });
    }
  }

  back(){
    this.router.navigate(['../'], { relativeTo: this.route })
  }
    
}
