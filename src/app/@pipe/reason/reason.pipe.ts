import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reason'
})
export class ReasonPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return;
    }

    if(value === 'HYDROMETER'){
      return  "Hidrômetro";
    }

    else if(value === 'DUE'){
      return "Taxa"
    }

    else if(value === 'CATEGORY'){
      return "Categoria"
    }

    else if(value === 'WATER'){
      return "Água (Hidrômetro)"
    }

    else if(value === 'ACCOUNT_PAYMENT'){
      return "Pagamento de fatura"
    }

    else {
      return value;
    }
  }

}
