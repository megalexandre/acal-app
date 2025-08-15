import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Place } from 'src/app/pages/dashboards/place/place.model';
import { PlaceService } from 'src/app/pages/dashboards/place/place.service';

export interface PlaceSelect {
  name: string;
  itens: Place[];
}

@Component({
  selector: 'app-place-select',
  templateUrl: './place-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlaceSelectComponent),
      multi: true
    }
  ]
})
export class PlaceSelectComponent implements ControlValueAccessor {

  @Input() disabled = false;
  @Input() control: FormControl | null = null;

  groups: PlaceSelect[] | null = null;

  value: string | null = null;

  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};

  constructor(private service: PlaceService) {
    this.load();
  }

  private load() {
    this.service.get().subscribe({
      next: (options: Place[]) => {
        this.groups = this.build(options);
      }
    });
  }

  private build(options: Place[]): PlaceSelect[] {
    return Array.from(new Set(options.map(g => g.address.name)))
      .sort((a, b) => a.localeCompare(b))
      .map(name => ({
        name: name,
        itens: options
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
