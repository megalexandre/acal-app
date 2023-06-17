import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class DocumentValidator {

  static  valid(): ValidatorFn {
    return (control: AbstractControl) => {
      const document = control.value

      if (document) {
        if(document.length === 11){
          let numbers, digits, sum, i, result, equalDigits;
          equalDigits = 1;
          if (document.length < 11) {
          return null;
          }

          for (i = 0; i < document.length - 1; i++) {
            if (document.charAt(i) !== document.charAt(i + 1)) {
              equalDigits = 0;
              break;
            }
          }

          if (!equalDigits) {
            numbers = document.substring(0, 9);
            digits = document.substring(9);
            sum = 0;
            for (i = 10; i > 1; i--) {
              sum += numbers.charAt(10 - i) * i;
            }

            result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

            if (result !== Number(digits.charAt(0))) {
              return { documentNotValid: true };
            }
            numbers = document.substring(0, 10);
            sum = 0;

            for (i = 11; i > 1; i--) {
              sum += numbers.charAt(11 - i) * i;
            }
            result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

            if (result !== Number(digits.charAt(1))) {
              return { documentNotValid: true };
            }
            return null;
          } else {
            return { documentNotValid: true };
          }

        }else if(document.length === 14){
          return null;
        }

        else{
          return { documentNotValid: true };
        }
     }

        return null;
    };
  }

}
