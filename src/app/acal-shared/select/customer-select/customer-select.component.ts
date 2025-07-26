
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomerService } from 'src/app/pages/dashboards/customer/customer.service';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerSelectComponent),
      multi: true,
    }
  ]
})
export class CustomerSelectComponent implements OnInit, ControlValueAccessor {
  
  @Input() 
  control: AbstractControl | null = null;

  customers: any[] = [];

  value: any = null;
  disabled = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.get().subscribe(customers => {
      this.customers = customers.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = selectElement.selectedIndex;
    const customer = this.customers[selectedIndex - 1] ?? null;
    this.value = customer;
    this.onChange(this.value);
    this.onTouched();
  }

  isValid(): boolean {
    return false;
  }

  isInvalid(): boolean {
    return false;
  }
}