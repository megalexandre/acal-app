import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../customer.service';
import { ModalWithSent } from '../../address/address.model';
import { CpfCnpjValidator } from 'src/app/acal-shared/validator/cpf.cnpj-validator';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
})
export class CustomerCreateComponent implements OnInit, ModalWithSent {
 
  @Output()
  public sent = new EventEmitter<string>();

  public form: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    public activeModal: NgbActiveModal,
  ) {


    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      identity_card: ['', [CpfCnpjValidator.valid(), Validators.required]],
      phone_number: [''],
      partner_number: [''],
      voter: [true,[Validators.required]],
    });

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.service.create(this.form.value).subscribe({
        next: () => {
          this.sent.emit();
          this.close();
        },
        error: () => this.form.reset(),
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
    return this.form.get(field);
  }

}
