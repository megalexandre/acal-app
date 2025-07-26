import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address, ModalWithSent } from '../../address/address.model';
import { AddressService } from '../../address/address.service';
import { CustomerService } from '../../customer/customer.service';
import { PlaceService } from '../../place/place.service';
import { LinkService } from '../link.service';
import { Customer } from '../../customer/customer.model';

@Component({
  templateUrl: './link-create.component.html',
})
export class LinkCreateComponent implements OnInit, ModalWithSent {
 
  @Output()
  public sent = new EventEmitter<string>();

  public form: FormGroup;
  public submitted = false;
  public addresses: Address[] = [];

  public customers: Customer[] = [];


  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private placeService: PlaceService,
    private addressService: AddressService,
    private service: LinkService,
    public activeModal: NgbActiveModal,
  ) {

    this.form = this.fb.group({
      number: ["A", [Validators.required]],
      customer_id: [null, [Validators.required]],
      place_id: [null, [Validators.required]],
      category_id: [null, [Validators.required]],
      exclusive_member: [null, [Validators.required]],
    });
  }


  ngOnInit(): void {
    this.customerService.get().subscribe({
      next: (customers) => {
        this.customers = customers.sort((a, b) => a.name.localeCompare(b.name));;
      }
    });
    
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
