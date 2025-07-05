import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressService } from '../address.service';
import { el } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
})
export class AddressCreateComponent {
  @Output()
  public onSave = new EventEmitter<string>();

  public addressForm: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    public activeModal: NgbActiveModal,
  ) {
    this.addressForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.addressForm.markAllAsTouched();

    if (this.addressForm.valid) {
      this.addressService.createAddress(this.addressForm.value).subscribe({
        next: () => {
          this.onSave.emit();
          this.close();
        },
        error: () => this.addressForm.reset(),
      });
    }
  }

  close() {
    this.activeModal.close();
  }

  isValid(element: string): boolean {
    return (this.getControl(element)?.valid && this.submitted) || false;
  }

  isInvalid(element: string): boolean {
    return (this.getControl(element)?.invalid && this.submitted) || false;
  }

  getControl(field: string): AbstractControl | null {
    return this.addressForm.get(field);
  }
}
