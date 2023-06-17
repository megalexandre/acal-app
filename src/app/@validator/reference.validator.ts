import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class ReferenceValidator {

  static valid(): ValidatorFn {
    return (control: AbstractControl) => {
      const string = control.value
      if(string){

        if(string.length !== 6) {
          return { referenceNotValid: true };
        }

        else if(string.length === 6){
          const month = Number(string.substring(0,2))
          const year = Number(string.substring(2,6))

          if(month < 1 || month > 12){
            return { monthNotValid: true };
          }

          if(year < 2010){
            return { yearNotValid: true };
          }

        }
      }

      return null;
    };

  }


}




