import { AbstractControl, ValidationErrors, FormControl, Validators } from "@angular/forms";
import { Component, forwardRef, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from "@angular/forms";

@Component({
  selector: 'input-identification',
  templateUrl: './idenficication.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdentificationInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IdentificationInputComponent),
      multi: true
    }
  ]
})
export class IdentificationInputComponent implements OnChanges, ControlValueAccessor, Validator {

  @Input() submitted!: boolean;


  types = [
    { value: 'cpf', label: 'Pessoa Física' },
    { value: 'cnpj', label: 'Pessoa Jurídica' }
  ];

  selectedType: 'cpf' | 'cnpj' | null = 'cpf'; // Default set to 'Pessoa Física'

  control = new FormControl('', Validators.required);

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() {
    this.control.valueChanges.subscribe(() => this.updateValue());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['submitted']) {
      const prev = changes['submitted'].previousValue;
      const current = changes['submitted'].currentValue;

      if (current === true && prev !== true) {
        this.control.markAsTouched();
        this.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      }
    }
  }

  writeValue(value: any): void {
    if (value && value.type && value.value) {
      this.selectedType = value.type;
      this.control.setValue(value.value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  isInvalid(): boolean {
    return this.submitted && this.control.touched && !!this.validate(this.control);
  }

  isValid(): boolean {
    return this.submitted && this.control.touched && !this.validate(this.control);
  }

  selectType(type: 'cpf' | 'cnpj') {
    this.selectedType = type;
    this.control.reset();
    this.control.updateValueAndValidity();
    this.updateValue();
  }

  private updateValue() {
    this.onChange({
      type: this.selectedType,
      value: this.control.value
    });
  }
}