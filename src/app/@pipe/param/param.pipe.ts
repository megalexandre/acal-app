import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'param'
})
export class ParamPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return;
    }

    if(value === 'COLOR'){
      return  "Cor aparente - 15UH";
    }
    else if(value === 'TURBIDITY'){
      return "Turbidez - 5.0 UT"
    }
    else if(value === 'CHLORINE'){
      return "Cloro - Min 0,2 mg/l"
    }
    else if(value === 'ESCHERICHIA'){
      return "Eschirichia Coli"
    }
    else if(value === 'COLOR'){
      return "Cloro - Min 0,2 mg/l"
    }
    else if(value === 'TOTAL_COLIFORMS'){
      return "Coliformes Totais"
    }

    else {
      return value;
    }

  }

}
