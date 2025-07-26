import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CnpjValidators {
  static isValid(cnpj: string): boolean {
    if (!cnpj || /^(\d)\1+$/.test(cnpj) || cnpj.length !== 14) return false;

    const validateDigit = (index: number): boolean => {
      const weights = index === 12
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

      const sum = cnpj
        .substring(0, index)
        .split('')
        .map(Number)
        .reduce((acc, num, i) => acc + num * weights[i], 0);

      const remainder = sum % 11;
      const checkDigit = remainder < 2 ? 0 : 11 - remainder;

      return checkDigit === parseInt(cnpj.charAt(index));
    };

    return validateDigit(12) && validateDigit(13);
  }

  static valid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value?.replace(/\D/g, '');
      if (!value || !this.isValid(value)) {
        return { invalidCNPJ: true };
      }
      return null;
    };
  }
}