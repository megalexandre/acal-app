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
  Validators
} from '@angular/forms';

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

  // controles
  dayControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(31),
    Validators.pattern(/^[0-9]{1,2}$/)
  ]);

  monthControl = new FormControl('', [Validators.required]);
  yearControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(4),
    Validators.pattern(/^[0-9]{4}$/)
  ]);

  // meses
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

  selectedMonth: string | null = null;
  selectedMonthLabel: string | null = null;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() {
    this.dayControl.valueChanges.subscribe(() => this.updateDate());
    this.yearControl.valueChanges.subscribe(() => this.updateDate());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['submitted']) {
      const prev = changes['submitted'].previousValue;
      const current = changes['submitted'].currentValue;

      if (current === true && prev !== true) {
        this.dayControl.markAsTouched();
        this.monthControl.markAsTouched();
        this.yearControl.markAsTouched();
      }
    }
  }

  writeValue(value: string): void {
    if (value) {
      const [year, month, day] = value.split('-');
      this.yearControl.setValue(year, { emitEvent: false });
      this.dayControl.setValue(day, { emitEvent: false });
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
    isDisabled ? (this.dayControl.disable(), this.monthControl.disable(), this.yearControl.disable()) 
               : (this.dayControl.enable(), this.monthControl.enable(), this.yearControl.enable());
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.dayControl.invalid || this.yearControl.invalid || !this.selectedMonth) {
      return { dateInvalid: true };
    }
    return null;
  }

  isInvalid(): boolean {
    if (!this.submitted) return false;
    return (this.dayControl.touched && this.dayControl.invalid) ||
           (this.yearControl.touched && this.yearControl.invalid) ||
           (!this.selectedMonth);
  }

  isValid(): boolean {
    if (!this.submitted) return false;
    return this.dayControl.valid && this.yearControl.valid && !!this.selectedMonth;
  }

  selectMonth(month: { value: string, label: string }) {
    this.selectedMonth = month.value;
    this.selectedMonthLabel = month.label;
    this.updateDate();
  }

  private updateDate() {
    if (this.selectedMonth && this.yearControl.valid && this.dayControl.valid) {
      const day = String(this.dayControl.value).padStart(2, '0');
      const value = `${this.yearControl.value}-${this.selectedMonth}-${day}`;
      this.onChange(value);
    } else {
      this.onChange(null);
    }
  }
}
