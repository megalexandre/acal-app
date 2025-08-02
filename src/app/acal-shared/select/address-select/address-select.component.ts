import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Address } from 'src/app/pages/dashboards/address/address.model';
import { AddressService } from 'src/app/pages/dashboards/address/address.service';

@Component({
  selector: 'app-address-select',
  templateUrl: './address-select.component.html',
   providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AddressSelectComponent),
        multi: true
      }
    ]
})
export class AddressSelectComponent implements ControlValueAccessor {
  @Input() disabled = false;

  public addresses: Address[] = [];
  public value: Address | null = null;

  private onChange: (value: Address | null) => void = () => {};
  private onTouch: () => void = () => {};

  constructor(private service: AddressService) {
    this.loading();
  }

  private loading() {
    this.service.get().subscribe({
      next: (addresses) => (this.addresses = addresses)
    });
  }

  writeValue(value: Address | null): void {
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

  onSelectionChange(value: Address | null): void {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }
}