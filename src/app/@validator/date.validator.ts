import { AbstractControl, ValidatorFn } from '@angular/forms';
import { isValid } from 'date-fns';

const day = 0
const month = 1
const year = 2
export default class DateValidator {

  static valid(): ValidatorFn {
    return (control: AbstractControl) => {
      const string = control.value
      if(string){

        if(string.length !== 10) {
          return { dateNotValid: true };
        }

        else if(string.length === 10){
          const fieds = string.split('-')
          var data = new Date(+fieds[year], +fieds[month] - 1, +fieds[day]);
          if(!isValid(data)){
            return { dateNotValid: true };
          }
        }
      }

      return null;
    };

  }


}




