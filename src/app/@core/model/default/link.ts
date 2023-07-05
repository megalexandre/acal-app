import { CustomerFilter } from '@model/default/customer';
import { Address, AddressFilter, Category, Customer, Group, GroupFilter, Hydrometer, PersonType, Place, PlaceFilter } from "./_index";

export interface Link {
  id: string,
  group: Group,
  customer: Customer,
  place: Place,
  mailPlace: Place,
  linkName: String,
  active: Boolean,
  startedAt: Date,
  finishedAt: Date,
  hydrometer?: Hydrometer,
  createdBy: string,
}

export interface HydrometerGenerater {
  addressName: String,
  linkHydrometerPair: LinkHydrometerPair[]
}

export interface LinkHydrometerPair {
  link: Link,
  lastConsumption: number,
  actualConsumption?: number,
  value: number,
  checked?: boolean;
}

export interface LinkPage {
  id: string,
  group: Group,
  customer: Customer,
  place: Place,
  mailPlace: Place,
  linkName: String,
  active: Boolean,
  startedAt: Date,
  finishedAt: Date,
  hydrometer?: Hydrometer,
  createdBy: string,
}

export class LinkFilter {
  id?: string;
  active?: boolean = null;
  group?: GroupFilter = null;
  customer?: CustomerFilter = null;
  place?: PlaceFilter = null;
  personType?: PersonType = null;

  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(): void {
  }
}

export class LinkPageFilter {
  id?: string;
  active?: boolean = null;
  category?: Category = null;

  address?: AddressFilter = {
    id: null,
    name: null,
  };
  group?: GroupFilter = {
    name: null,
    document: null,
    category: null,
    categoryValue: null,
    value: null,
  };
  customer?: CustomerFilter = { name: null, document: null}
  place?: PlaceFilter = {
    number: null,
    letter: null,
    address: {
      id: null,
      name: null,
    },
  };
  personType?: PersonType = {name: 'PERSON'};

  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(): void {
    this.id = null;
    this.active = null;
    this.category = null;
    this.address = {
      id: null,
      name: null,
    };
    this.group = {
      name: null,
      document: null,
      category: null,
      categoryValue: null,
      value: null,
    };
    this.customer =  { name: null, document: null};
    this.place = {
      number: null,
      letter: null,
      address: {
        id: null,
        name: null,
      },
    };
    this.personType = {name: 'PERSON'};;

    this.page = 0;
    this.pageSize = 10;
    this.direction = 'ASC';
    this.sortedField = 'id';
  }
}


export interface LinkGroupedByAddress {
  address: Address,
  selected: boolean;
  links: SelectLink[]
}

export interface SelectLink{
  selected: boolean,
  link: Link,
  hydrometerValue: number,
  categoryValue: number,
  value: number
}

