import { Pipe, PipeTransform } from '@angular/core';
import { MONTH } from '@model/enum/month.enum';

@Pipe({name: 'reference', pure: true})
export class ReferencePipe implements PipeTransform {

  transform(reference: string): string {

    if(!reference){
      return //garbage in garbage out
    }

    if(reference.length === 6){
      const month = (MONTH[reference.substring(0,2)])
      return month +"/"+ reference.substring(2,6)
    }

    return reference;
  }

}
