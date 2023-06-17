
export interface Group {
  id: string,
  value: number,
  categoryValue: number,
  name: string,
  category: Category,
}

export interface GroupFilter {
  name?: string;
  document?: string;
  category?: Category ;
  categoryValue?: number;
  value?: number;
}

export interface GroupPage {
  id: string,
  value: number,
  categoryValue: number,
  name: string,
  category: Category,
}

export class GroupPageFilter {
  name?: string = '';
  document?: string = '';
  category?: Category = null;
  categoryValue?: number = null;
  value?: number = null;

  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(){
    this.name = '';
    this.document = '';
    this.category = null;
    this.value = null;
    this.categoryValue = null;

    this.page = 0;
    this.pageSize = 10;
    this.direction = 'ASC';
    this.sortedField = 'id';
  }
}

export interface Category {
  name: 'FOUNDER'|'EFFECTIVE'|'TEMPORARY',
}

export interface GroupPage {}




