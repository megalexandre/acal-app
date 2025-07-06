import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressService } from '../address.service';
import { Address, ModalWithSent } from '../address.model';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
})
export class AddressEditComponent  implements OnInit, ModalWithSent {
  
  @Input() 
  public address!: Address;
   
  @Output() 
  public sent = new EventEmitter<void>();

  public addressForm!: FormGroup;
  public submitted = false;
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    public activeModal: NgbActiveModal,
  ) {

  }

  ngOnInit() {
    this.addressForm = this.fb.group({
      id: [this.address.id, [Validators.required]],
      name: [this.address.name, [Validators.required, Validators.minLength(3)]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.addressForm.markAllAsTouched();
    
    if (this.addressForm.valid) {
      this.loading = true;

      this.addressService.updateAddress(this.addressForm.value).subscribe({
        next: () => {
          this.sent.emit();
          this.close();
        },
        error: () => {
          this.loading = false;
          this.addressForm.reset();
        }
          
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
