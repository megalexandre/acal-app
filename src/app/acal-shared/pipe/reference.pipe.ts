import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reference'
})
export class ReferencePipe implements PipeTransform {

  private readonly months: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  transform(value: string): string {
    if (!value) return '';

    let year: number;
    let month: number;

    if (value.includes('-')) {
      const [y, m] = value.split('-').map(v => parseInt(v, 10));
      year = y;
      month = m;
    } else {
      const date = new Date(value);
      year = date.getFullYear();
      month = date.getMonth() + 1;
    }

    return `${this.months[month - 1]}/${year}`;
  }
  
}