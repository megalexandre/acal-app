import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class AddressSelectComponent {

  @Input() disabled: boolean = false;

  public addresses: Address[] = [];
  public value: string | null = null;

  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};

  constructor(public service: AddressService) {
    this.loading();
  }

  private loading() {
    this.service.getAddresses().subscribe({
      next: (addresses) => {
        this.addresses = addresses ;
      }
    });
  }

  writeValue(value: any): void {
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

  onSelectionChange(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }
}
