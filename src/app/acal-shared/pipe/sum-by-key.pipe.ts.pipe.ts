import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumByKey',
})
export class SumByKeyPipe implements PipeTransform {

  transform(items: any[], key: string): number {
    if (!items || !key) {
      return 0;
    }
    return items.reduce((sum, item) => sum + parseFloat(item[key] || 0), 0);
  }

}