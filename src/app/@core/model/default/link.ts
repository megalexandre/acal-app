import { Address, Category, Customer, CustomerFilter, Group, GroupFilter, Hydrometer, PersonType, Place, PlaceFilter } from "./_index";

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
  address?: Address = null;
  group?: GroupFilter = null;
  customer?: CustomerFilter = null;
  place?: PlaceFilter = null;
  personType?: PersonType = null;

  reset(): void {
    Object.keys(this).forEach((key) => {
      this[key] = null;
    });
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

