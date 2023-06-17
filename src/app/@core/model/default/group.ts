import { DefaultFilter, DefaultFilterPage, DefaultModel } from "./_index";

export interface Group extends DefaultModel {
  id: string,
  value: number,
  categoryValue: number,
  name: string,
  category: Category,
}

export interface GroupFilter extends DefaultFilter {
  name?: string;
  document?: string;
  category?: Category ;
  categoryValue?: number;
  value?: number;
}

export interface GroupPage extends Group {
  id: string,
  value: number,
  categoryValue: number,
  name: string,
  category: Category,
}

export class GroupPageFilter extends DefaultFilterPage {
  name?: string = '';
  document?: string = '';
  category?: Category = null;
  categoryValue?: number = null;
  value?: number = null;

  reset(){
    super.reset();
    this.name = '';
    this.document = '';
    this.category = null;
    this.value = null;
    this.categoryValue = null;

  }
}

export interface Category {
  name: 'FOUNDER'|'EFFECTIVE'|'TEMPORARY',
}

export interface GroupPage extends DefaultFilter{}




