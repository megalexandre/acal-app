import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'monetary',
  template: `
    <input
      type="text"
      mask="separator.2"
      thousandSeparator="."
      placeholder="0,00"
      decimalMarker=","
      [dropSpecialCharacters]="false"
      [ngModel]="value"
      (ngModelChange)="onChangeValue($event)"
      (blur)="onTouched()"
      class="form-control"
    />
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MonetaryInputComponent),
    multi: true
  }]
})
export class MonetaryInputComponent implements ControlValueAccessor {

  value: string = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangeValue(value: string) {
    this.value = value;
    this.onChange(value);
  }
}
