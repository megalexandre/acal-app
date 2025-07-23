import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class DateValidators {
  static valid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      if (!value || value.length !== 8) {
        return { invalidFormat: true }; 
      }

      const year = parseInt(value.substring(0, 4), 10);
      const month = parseInt(value.substring(4, 6), 10);
      const day = parseInt(value.substring(6, 8), 10);

      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return { invalidCharacters: true };
      }

      if (year < 1900 || year > 2100) {
        return { invalidYear: true };
      }

      const date = new Date(year, month - 1, day);

      const isValidDate =
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day;

      if (!isValidDate) {
        return { invalidDate: true };
      }

      return null;
    };
  }
}
