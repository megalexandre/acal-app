import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
  FormControl,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { ReferenceValidators } from '../../validator/reference.validator';

@Component({
  selector: 'app-input-reference',
  templateUrl: './reference-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReferenceInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ReferenceInputComponent),
      multi: true
    }
  ]
})
export class ReferenceInputComponent implements OnChanges, ControlValueAccessor, Validator {

  @Input() submitted!: boolean;
  @Input() placeholder: string = 'YYYY-MM';

  reference = new FormControl('', [
    Validators.required,
    ReferenceValidators.valid()
  ]);

  private onChange: any = () => {};
  private onTouched: any = () => {};

ngOnChanges(changes: SimpleChanges): void {
  if (changes['submitted']) {
    const prev = changes['submitted'].previousValue;
    const current = changes['submitted'].currentValue;

    if (current === true && prev !== true) {
      this.reference.markAsTouched();
      this.reference.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
  }
}
  // Métodos do ControlValueAccessor
  writeValue(value: string): void {
    this.reference.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.reference.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.reference.disable() : this.reference.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const validators: ValidatorFn[] = [
      Validators.required,
      ReferenceValidators.valid()
    ];

    const composedValidator = Validators.compose(validators);
    return composedValidator ? composedValidator(control) : null;
  }

  // Métodos auxiliares
  isInvalid(): boolean {
    if (!this.submitted) return false;
    return this.reference.touched && this.reference.invalid;
  }

  isValid(): boolean {
    if (!this.submitted) return false;
    return this.reference.touched && this.reference.valid;
  }

}
