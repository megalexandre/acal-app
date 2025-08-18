import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address, ModalWithSent } from '../../address/address.model';
import { LinkService } from '../link.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './link-create.component.html',
})
export class LinkCreateComponent implements OnInit, ModalWithSent {
 
  @Output()
  public sent = new EventEmitter<string>();

  public form: FormGroup;
  public submitted = false;
  public address: Address | null = null;

  constructor(
    private fb: FormBuilder,
    private service: LinkService,
    public activeModal: NgbActiveModal,
    private t: ToastrService,
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
    
  }

  async onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {

      const request = {
        number: '2025',
        customer_id: this.customerControl.value.id,
        place_id: this.placeControl.value.id,
        category_id: this.categoryControl.value.id,
        exclusive_member: this.exclusiveMenberControl.value,
      }

      this.service.create(request).subscribe({
        next: () => {
          this.sent.emit();
          this.close();
        },
        error: (error) => {
          this.form.reset()
          this.t.error('Error', error)
        },
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

  get customerControl(): FormControl{
    return this.form.get('customer_id') as FormControl;
  }  

  get categoryControl(): FormControl {
    return this.form.get('category_id') as FormControl;
  }

  get exclusiveMenberControl(): FormControl {
    return this.form.get('exclusive_member') as FormControl;
  }

  get placeControl(): FormControl{
    return this.form.get('place_id') as FormControl;
  }
  
}
