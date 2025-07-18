import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address, ModalWithSent } from '../../address/address.model';
import { CategoryService } from '../category.service';
import { Group } from '../category.model';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
})
export class CategoryCreateComponent implements OnInit, ModalWithSent {
 
  @Output()
  public sent = new EventEmitter<string>();

  public form: FormGroup;
  public submitted = false;
  public addresses: Address[] = [];
  public groups: Group[] = [];

  constructor(
    private fb: FormBuilder,
    private service: CategoryService,
    public activeModal: NgbActiveModal,
  ) {

    this.service.getGroups().subscribe(groups => {
      this.groups = groups;
    });

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      water_value: ['', [Validators.required, Validators.min(0)]],
      partner_value: ['', [Validators.required, Validators.min(0)]],
      group: ['', [Validators.required]],
      is_hydrometer: [false, []],
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
