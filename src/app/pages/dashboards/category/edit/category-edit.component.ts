import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address, ModalWithSent } from '../../address/address.model';
import { CategoryService } from '../category.service';
import { Category, Group } from '../category.model';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
})
export class CategoryEditComponent implements OnInit, ModalWithSent {
 
  @Input() 
  public category!: Category;

  @Output()
  public sent = new EventEmitter<string>();

  public form!: FormGroup;
  public submitted = false;
  public addresses: Address[] = [];
  public groups: Group[]  = [];
  
  constructor(
    private fb: FormBuilder,
    private service: CategoryService,
    public activeModal: NgbActiveModal,
  ) {


  }

  ngOnInit(): void {
    this.service.getGroups().subscribe(groups => {
      this.groups = groups;
    });

    this.form = this.fb.group({
      id: [this.category.id, [Validators.required]],
      name: [this.category.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      water_value: [this.category.water_value, [Validators.required, Validators.min(0)]],
      partner_value: [this.category.partner_value, [Validators.required, Validators.min(0)]],
      group: [this.category.group, [Validators.required]],
      is_hydrometer: [this.category.is_hydrometer, []],
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
