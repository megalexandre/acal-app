
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identification'
})
export class IdentificationPipe implements PipeTransform {

  transform(value: any): any {

    if(!value){
      return //garbage in garbage out
    }

    if(value.length === 11){
      value =  value
        .replace(/[^0-9]/, '')
        .padStart(11, '0')
        .substr(0, 11)
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');
    }
    else if (value.length === 14){
      value =  value
        .replace(/[^0-9]/, '')
        .padStart(14,'0')
        .substr(0, 14)
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,'$1.$2.$3/$4-$5');
    }

    return value
  }

}
