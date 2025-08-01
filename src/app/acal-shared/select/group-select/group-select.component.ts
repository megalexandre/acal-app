import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Category, Group } from 'src/app/pages/dashboards/category/category.model';
import { CategoryService } from 'src/app/pages/dashboards/category/category.service';


@Component({
  selector: 'app-group-select',
  templateUrl: './group-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GroupSelectComponent),
      multi: true
    }
  ]
})
export class GroupSelectComponent implements ControlValueAccessor {

  @Input() disabled = false;
  @Input() control: FormControl | null = null;

  value: string | null = null;

  groups: Group[] = [];

  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};

  constructor(private service: CategoryService) {
    this.loadCategories();
  }

  private loadCategories() {
    this.service.getGroups().subscribe({
      next: (groups) => {
        this.groups = groups
      }
    });
  }

  writeValue(value: string | null): void {
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

  onSelectionChange(value: string | null): void {
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
