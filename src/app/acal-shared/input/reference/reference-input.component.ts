import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

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

  yearControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(4),
    Validators.pattern(/^[0-9]{4}$/)
  ]);

  selectedMonth: string | null = null;
  selectedMonthLabel: string | null = null;

  months = [
    { value: '01', label: 'Janeiro' },
    { value: '02', label: 'Fevereiro' },
    { value: '03', label: 'Março' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Maio' },
    { value: '06', label: 'Junho' },
    { value: '07', label: 'Julho' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' }
  ];

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() {
    this.yearControl.valueChanges.subscribe(() => this.updateReference());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['submitted']) {
      const prev = changes['submitted'].previousValue;
      const current = changes['submitted'].currentValue;

      if (current === true && prev !== true) {
        this.yearControl.markAsTouched();
        this.yearControl.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      }
    }
  }

  writeValue(value: string): void {
    if (value) {
      const [year, month] = value.split('-');
      this.yearControl.setValue(year, { emitEvent: false });
      const found = this.months.find(m => m.value === month);
      if (found) {
        this.selectedMonth = found.value;
        this.selectedMonthLabel = found.label;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.yearControl.disable() : this.yearControl.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.selectedMonth || this.yearControl.invalid) {
      return { referenceInvalid: true };
    }
    return null;
  }

  isInvalid(): boolean {
    if (!this.submitted) return false;
    return this.yearControl.touched && (this.yearControl.invalid || !this.selectedMonth);
  }

  isValid(): boolean {
    if (!this.submitted) return false;
    return this.yearControl.touched && this.yearControl.valid && !!this.selectedMonth;
  }

  selectMonth(month: { value: string, label: string }) {
    this.selectedMonth = month.value;
    this.selectedMonthLabel = month.label;
    this.updateReference();
  }

  private updateReference() {
    if (this.selectedMonth && this.yearControl.valid) {
      const value = `${this.yearControl.value}-${this.selectedMonth}`;
      this.onChange(value);
    } else {
      this.onChange(null);
    }
  }
}
