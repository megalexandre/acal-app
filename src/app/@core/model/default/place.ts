import { Address, AddressFilter } from "./_index";

export interface Place {
  id: string,
  number: number,
  letter: string,
  address: Address,
  hasHydrometer: boolean,
  other: string,
}

export interface PlacePage  {
  id: string,
  number: number,
  letter: string,
  address: Address,
  hasHydrometer: boolean,
  other: string,
}

export interface PlaceFilter {
  number?: string,
  letter?: string,
  address?: AddressFilter,
}


export class PlacePageFilter{
  id?: string = null;
  number?: number = null;
  letter?: string = null;
  address?: Address = null;
  hasHydrometer?: boolean = null;
  other?: string = null;

  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(){
    this.id = null;
    this.number = null;
    this.letter = null
    this.address = null;
    this.hasHydrometer = null;
    this.other = null;

    this.page = 0;
    this.pageSize = 10;
    this.direction = 'ASC';
    this.sortedField = 'id';
  }
}
