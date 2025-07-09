import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesOrNo'
})
export class BooleanPipe implements PipeTransform {

  transform(value: string | boolean | Boolean): string {
    return value === 'true' || value === true ? 'Sim' : 'Não';
  }
  
}