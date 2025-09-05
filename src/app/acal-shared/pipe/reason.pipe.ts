import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reason'
})
export class ReasonPipe implements PipeTransform {

  private readonly reasonMap: Record<string, string> = {
    INVOICE_PAYMENT: 'PAGAMENTO',
    INVOICE_REFUND: 'ESTORNO',
    INVOICE_DELETE: 'CANCELAMENTO'
  };

  transform(value: string | boolean | Boolean): string {
    if (typeof value === 'string' && this.reasonMap[value]) {
      return this.reasonMap[value];
    }
    return value === 'true' || value === true ? 'Sim' : 'Não';
  }
  
}