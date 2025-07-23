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
import { DateValidators } from '../../validator/date.validator';

@Component({
  selector: 'app-input-date',
  templateUrl: './date-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements OnChanges, ControlValueAccessor, Validator {

  @Input() submitted!: boolean;
  @Input() placeholder: string = 'YYYY-MM-DD';

  reference = new FormControl('', [
    Validators.required,
    DateValidators.valid()
  ]);

  private onChange: (value: Date | null) => void = () => {};
  private onTouched: () => void = () => {};

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

  writeValue(value: Date | string | null): void {
    if (!value) {
      this.reference.setValue('', { emitEvent: false });
      return;
    }

    const str = value instanceof Date
      ? value.toISOString().substring(0, 10) // 'YYYY-MM-DD'
      : value;

    this.reference.setValue(str, { emitEvent: false });
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;

    this.reference.valueChanges.subscribe(val => {
      if (!val) {
        this.onChange(null);
        return;
      }

      const dateParts = val.split('-');
      if (dateParts.length === 3) {
        const [year, month, day] = dateParts.map(Number);
        const date = new Date(year, month - 1, day);
        this.onChange(date);
      } else {
        this.onChange(null);
      }
    });
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.reference.disable() : this.reference.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const validators: ValidatorFn[] = [
      Validators.required,
      DateValidators.valid()
    ];

    const composedValidator = Validators.compose(validators);
    return composedValidator ? composedValidator(control) : null;
  }

  isInvalid(): boolean {
    if (!this.submitted) return false;
    return this.reference.touched && this.reference.invalid;
  }

  isValid(): boolean {
    if (!this.submitted) return false;
    return this.reference.touched && this.reference.valid;
  }
}
