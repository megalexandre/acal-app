
import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '@model/default/book';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(type: Type): string {

    if(type.name === 'IN'){
      return "Entrada"
    }

    else {
      return "Saída"
    }

  }

}
