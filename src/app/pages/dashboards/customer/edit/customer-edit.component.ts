import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../customer.service';
import { ModalWithSent } from '../../address/address.model';
import { Customer } from '../customer.model';

@Component({
    selector: 'app-customer-edit',
    templateUrl: './customer-edit.component.html',
    standalone: false
})
export class CustomerEditComponent implements OnInit, ModalWithSent {
 
  @Input()
  public customer!: Customer;

  @Output()
  public sent = new EventEmitter<string>();

  public form!: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    public activeModal: NgbActiveModal,
  ) {


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.customer.id, [Validators.required]],
      name: [this.customer.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      identity_card: [this.customer.identity_card || ''],
      phone_number: [this.customer.phone_number || ''],
      partner_number: [this.customer.partner_number || ''],
      voter: [this.customer.voter,[Validators.required]],
    });
  }

  async onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.service.update(this.form.value).subscribe({
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
