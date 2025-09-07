import { Component, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Address } from 'src/app/pages/dashboards/address/address.model';
import { Place } from 'src/app/pages/dashboards/place/place.model';
import { PlaceService } from 'src/app/pages/dashboards/place/place.service';

export interface PlaceSelect {
  name: string;
  itens: Place[];
}

@Component({
  selector: 'app-place-address-select',
  templateUrl: './place-address-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlaceAddressSelectComponent),
      multi: true
    }
  ]
})
export class PlaceAddressSelectComponent implements ControlValueAccessor, OnChanges {

  
  @Input() disabled = false;
  @Input() address: Address | null = null
  @Input() control: FormControl | null = null;

  groups: PlaceSelect[] | null = null;
  value: string | null = null;

  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};

  constructor(private service: PlaceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['address'] && this.address) {
      this.load(this.address);
    }
  }

  private load(address: Address | null) {
    if (!address) {
      this.groups = [];
      return;
    }

    this.service.get().subscribe({
      next: (options: Place[]) => {
        this.groups = this.build(options, address);
      }
    });
  }

  private build(options: Place[], address: Address): PlaceSelect[] {
    const filtered = options.filter(item => item.address.id === address.id);

    return Array.from(new Set(filtered.map(g => g.address.name)))
      .sort((a, b) => a.localeCompare(b))
      .map(name => ({
        name,
        itens: filtered
          .filter(option => option.address.name === name)
          .sort((a, b) => a.address.name.localeCompare(b.address.name))
      }));
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
