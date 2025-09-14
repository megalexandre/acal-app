import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WaterMeterPreview } from '../water-meter.model';
import { WaterMeterService } from '../water-meter.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-water-meter-create',
  templateUrl: './water-meter-create.component.html',
})
export class WaterMeterCreateComponent implements OnInit {

  form: FormGroup;
  hasRefernece = false;
  loading = true;
  reference: string = '';

  constructor(
    private fb: FormBuilder,
    private service: WaterMeterService,
    private t: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      items: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  private createItem(item: WaterMeterPreview): FormGroup {
    return this.fb.group({
      id: [item.id, Validators.required],
      reference: [item.reference, Validators.required],
      link_id: [item.link_id, Validators.required],
      link_name: [item.link_name],
      price_per_unit: [item.price_per_unit, Validators.required],
      free_tier: [item.free_tier, Validators.required],
      start: [item.start, Validators.required],
      end: [item.end, Validators.required],
    });
  }

  search() {
    this.loading = true;
    this.hasRefernece = true;
    this.service.preview(this.reference).subscribe({
      next: (items) => {
        this.items.clear();
        items.forEach((i) => this.items.push(this.createItem(i)));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.service.create(this.form.value.items).subscribe({
      next: () => {
        this.back();
      },
      error: (e) => {
        this.t.error(e);
      },
    });
  }

   public back() {
    this.router.navigate(['../'], {relativeTo: this.route });
  }
}
