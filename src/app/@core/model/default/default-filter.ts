export interface DefaultModel {
  id?: string
}

export interface DefaultModelPage {
  id?: string
}

export interface DefaultFilter {
  id?: string

  reset(): void
}

export abstract class DefaultFilterPage {

  page: number = 0;
  pageSize: number = 0;
  direction: Direction = {name: 'ASC'};
  sortedField: string = 'id';

  reset(): void{
    this.page = 0;
    this.pageSize = 0;
    this.direction = {name: 'ASC'};
    this.sortedField = 'id';
  }

}

export type Direction = {
  name: 'ASC' | 'DESC'
}

