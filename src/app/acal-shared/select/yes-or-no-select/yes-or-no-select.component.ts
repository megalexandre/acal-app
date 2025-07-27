import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-or-no-select',
  templateUrl: './yes-or-no-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YesOrNoSelectComponent),
      multi: true
    }
  ]
})
export class YesOrNoSelectComponent implements ControlValueAccessor {

  @Input() 
  label: string = '';

  @Input()
  control: FormControl | null = null;

  value: boolean | null = null;
  isDisabled = false;

  onChange = (value: boolean | null) => {};
  onTouched = () => {};

  writeValue(value: boolean | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onValueChange(value: boolean | null) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  isInvalid(): boolean {
    return !!(this.control && this.control.invalid && (this.control.dirty || this.control.touched));
  }

  isValid(): boolean {
    return !!(this.control && this.control.valid && (this.control.dirty || this.control.touched));
  }
}