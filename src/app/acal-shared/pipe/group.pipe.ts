import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  private groups = [
    { name: 'Sócio Fundador', value: 'FOUNDER' },
    { name: 'Sócio Efetivo', value: 'EFFECTIVE' },
    { name: 'Temporário', value: 'TEMPORARY' },
  ];

  transform(value: string): string {
    const group = this.groups.find(g => g.value === value);
    return group ? group.name : value;
  }
  
}