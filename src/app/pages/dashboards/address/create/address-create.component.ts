import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWithSent } from '../address.model';
import { AddressService } from '../address.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
})
export class AddressCreateComponent implements ModalWithSent {
 
  @Output()
  public sent = new EventEmitter<string>();

  public form: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    public activeModal: NgbActiveModal,
    private t: ToastrService,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.addressService.create(this.form.value).subscribe({
        next: () => {
          this.sent.emit();
          this.close();
        },
        error: (error) => 
          {
            this.t.error(error.message|| 'Erro ao criar endereço');
            this.form.reset()
          } 
      }
      );
    }
  }

  getNameErrors(): string[] {
    const control = this.getControl('name');
    if (!control || !control.errors) return [];

    const errors = [];
    if (control.errors['required']) errors.push('Nome é obrigatório.');

    if (control.errors['minlength']) {
      const min = control.errors['minlength'];
      errors.push(`Nome precisa de pelo menos ${min.requiredLength} letras. Faltam: ${min.requiredLength - min.actualLength}`);
    }
    
    return errors;
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
    return this.form.get(field);
  }
}
