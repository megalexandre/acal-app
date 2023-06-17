
export interface Book {
  id: string,
  value: number,
  createdBy: string,
  createdAt: string,
  type: Type,
  reason: string,
}

export interface Type {
  name: 'IN'|'OUT',
}

export interface BookPage {
  id: string,
  value: number,
  createdBy: string,
  createdAt: string,
  type: Type,
  reason: string,
}

export interface BookFilter {
  value?: number,
  createdBy?: string,
  createdAt?: string,
  type?: string,
  reason?: string,
  createdAtStarted?: string,
  createdAtFinish?: string,
}

export class BookPageFilter {
  value?: number = null;
  createdBy?: string = null;
  createdAt?: string = null;
  type?: string = null;
  reason?: string = null;
  createdAtStarted?: string = null;
  createdAtFinish?: string = null;
  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(){
    this.page = 0;
    this.pageSize = 10;
    this.direction = 'ASC';
    this.sortedField = 'id';
    this.value = null;
    this.createdAt = null;
    this.createdBy = null
    this.type = null;
    this.reason = null;
    this.createdAtStarted = null;
    this.createdAtFinish = null;
  }

}
