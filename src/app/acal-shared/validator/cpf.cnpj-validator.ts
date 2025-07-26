import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CpfValidators } from './cpf.validator';
import { CnpjValidators } from './cnpj-validator';

export class CpfCnpjValidator {
  static valid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value?.replace(/\D/g, '');

      if (!value) return null;

      if (value.length === 11 && CpfValidators.isValid(value)) {
        return null;
      }

      if (value.length === 14 && CnpjValidators.isValid(value)) {
        return null;
      }

      return { invalidCpfOrCnpj: true };
    };
  }
}