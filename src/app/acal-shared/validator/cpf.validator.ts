import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CpfValidators {
  static isValid(cpf: string): boolean {
    if (!cpf || /^(\d)\1+$/.test(cpf) || cpf.length !== 11) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let firstDigit = (sum * 10) % 11;
    if (firstDigit >= 10) firstDigit = 0;
    if (firstDigit !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let secondDigit = (sum * 10) % 11;
    if (secondDigit >= 10) secondDigit = 0;
    return secondDigit === parseInt(cpf.charAt(10));
  }

  static valid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value?.replace(/\D/g, '');
      if (!value || !this.isValid(value)) {
        return { invalidCPF: true };
      }
      return null;
    };
  }
}