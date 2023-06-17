import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '@model/default/group';

@Pipe({name: 'category', pure: true})
export class CategoryPipe implements PipeTransform {

  transform(category: Category): string {

    if(!category){
      return "Not Found";
    }

    else if(category.toString().toUpperCase() === 'FOUNDER'){
      return "Fundador"
    }
    else if(category.toString().toUpperCase() === 'EFFECTIVE'){
      return "Efetivo"
    }
    else if(category.toString().toUpperCase()  === 'TEMPORARY'){
      return "Temporário"
    }

    return "Not Found";
  }

}
