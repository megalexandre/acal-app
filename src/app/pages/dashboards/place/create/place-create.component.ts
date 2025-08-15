import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaceService } from '../place.service';
import { Address, ModalWithSent } from '../../address/address.model';
import { AddressService } from '../../address/address.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
})
export class PlaceCreateComponent implements OnInit, ModalWithSent {
 
  @Output()
  public sent = new EventEmitter<string>();

  public form: FormGroup;
  public submitted = false;
  public addresses: Address[] = [];

  constructor(
    private fb: FormBuilder,
    private service: PlaceService,
    private addressService: AddressService,
    private activeModal: NgbActiveModal,
    private t: ToastrService,
  ) {

    this.form = this.fb.group({
      address: [null, [Validators.required]],
      number: [null, [Validators.required]],
      letter: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.addressService.get().subscribe({
      next: (addresses) => {
        this.addresses = addresses.sort((a, b) => a.name.localeCompare(b.name));;
      },
      error: () => {
        this.addresses = [];
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
        error: (error) => 
          {
            this.t.error(error);
            this.form.reset();
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
    return this.form.get(field);
  }
}
