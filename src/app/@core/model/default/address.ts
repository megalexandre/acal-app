
export interface Address {
  id?: string,
  name?: string,
}

export class AddressFilter {
  id?: string = null;
  name?: string = null;
}

export interface AddressPage {
  id?: string;
  name?: string;
}

export class AddressPageFilter {
  id?: string = '';
  name?: string = '';
  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(){
    this.page = 0;
    this.pageSize = 10;
    this.direction = 'ASC';
    this.sortedField = 'id';

    this.id = '';
    this.name = '';
  }

}

