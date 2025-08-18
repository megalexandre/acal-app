import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Category } from 'src/app/pages/dashboards/category/category.model';
import { CategoryService } from 'src/app/pages/dashboards/category/category.service';

export interface CategorySelect {
  group: string;
  categories: Category[];
}

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategorySelectComponent),
      multi: true
    }
  ]
})
export class CategorySelectComponent implements ControlValueAccessor {

  @Input() disabled = false;
  @Input() control: FormControl | null = null;

  groups: CategorySelect[] = [];

  // Agora o value é um Category, não string
  value: Category | null = null;

  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};

  constructor(private service: CategoryService) {
    this.loadCategories();
  }

  private loadCategories() {
    this.service.get().subscribe({
      next: (categories) => {
        this.groups = this.buildGroups(categories);
      }
    });
  }

  private buildGroups(categories: Category[]): CategorySelect[] {
    return Array.from(new Set(categories.map(c => c.group)))
      .sort((a, b) => a.localeCompare(b))
      .map(g => ({
        group: g,
        categories: categories
          .filter(category => category.group === g)
          .sort((a, b) => a.name.localeCompare(b.name))
      }));
  }

  writeValue(value: Category | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectionChange(value: Category | null): void {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }

  isInvalid(): boolean {
    return !!(this.control && this.control.invalid && (this.control.dirty || this.control.touched));
  }

  isValid(): boolean {
    return !!(this.control && this.control.valid && (this.control.dirty || this.control.touched));
  }
}
