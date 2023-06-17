import { DefaultFilter, DefaultFilterPage } from "./_index";

export interface Customer {
  id: string,
  name: string,
  document: string,
  phoneNumber: string,
  birthDay: string,
  membershipNumber?: string,
  personType: PersonType
}

export interface PersonType{
  name: 'PERSON'|'LEGAL'
}

export interface CustomerPage extends Customer{
  id: string,
  name: string,
  document: string,
  phoneNumber: string,
  birthDay: string,
  membershipNumber?: string,
  personType: PersonType
}

export class CustomerPageFilter extends DefaultFilterPage {
  name?: string =  null;
  document?: string  = null;
  personType: PersonType = {name: 'PERSON'};

  reset(){
    super.reset();
    this.name = '';
    this.document = '';
  }
}

export interface CustomerFilter extends DefaultFilter {
  name: string,
  document: string,
}


