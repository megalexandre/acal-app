export interface Customer {
  id: string,
  name: string,
  document: string,
  phoneNumber: string,
  birthDay: string,
  membershipNumber?: string,
  personType: PersonType
}

export interface PersonType {
  name: 'PERSON'|'LEGAL'
}

export interface CustomerPage {
  id: string,
  name: string,
  document: string,
  phoneNumber: string,
  birthDay: string,
  membershipNumber?: string,
  personType: PersonType
}

export class CustomerPageFilter {
  name?: string =  null;
  document?: string  = null;
  personType: PersonType = {name: 'PERSON'};
  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';


  reset(){
    this.name = '';
    this.document = '';
    this.page = 0;
    this.pageSize = 10;
    this.direction = 'ASC';
    this.sortedField = 'id';
  }
}

export interface CustomerFilter {
  name: string,
  document: string,
}


