import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ReferenceValidators {

   static valid(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      
      if (!value) return null;
      
      const yearStr = value.substring(0,4);
      const monthStr = value.substring(4,6);


      const year = parseInt(yearStr, 10);
      const month = parseInt(monthStr, 10);
      
      if (year < 1900) return { invalidYear: true };
      if (month < 1 || month > 12) return { invalidMonth: true };
      
      return null;
    };
  }
}