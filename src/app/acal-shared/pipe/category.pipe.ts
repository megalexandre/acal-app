import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/pages/dashboards/category/category.model';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  private readonly translations: Record<string, string> = {
    FOUNDER: 'Sócio Fundador',
    EFFECTIVE: 'Sócio Efetivo',
    TEMPORARY: 'Temporário'
  };

  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }

    if (this.translations[value]) {
      return this.translations[value];
    }

    return value;
  }
  
}

