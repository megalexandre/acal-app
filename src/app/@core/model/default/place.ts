import { Address, AddressFilter, DefaultFilter, DefaultFilterPage, DefaultModel, DefaultModelPage } from "./_index";

export interface Place extends DefaultModel {
  id: string,
  number: number,
  letter: string,
  address: Address,
  hasHydrometer: boolean,
  other: string,
}

export interface PlacePage extends DefaultModelPage {
  id: string,
  number: number,
  letter: string,
  address: Address,
  hasHydrometer: boolean,
  other: string,
}

export interface PlaceFilter extends DefaultFilter {
  number?: string,
  letter?: string,
  address?: AddressFilter,
}


export class PlacePageFilter extends DefaultFilterPage {
  id?: string = null;
  number?: number = null;
  letter?: string = null;
  address?: Address = null;
  hasHydrometer?: boolean = null;
  other?: string = null;

  reset(){
    super.reset();
    this.id = null;
    this.number = null;
    this.letter = null
    this.address = null;
    this.hasHydrometer = null;
    this.other = null;
  }
}
