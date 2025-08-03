import { Address } from "../address/address.model";
import { SortOrder } from "../link/link.model";

export class Place {

  constructor(
    public id: string,
    public number: string,
    public letter: string,
    public name: string,
    public has_hydrometer: boolean
  ) {}

  static fromJson(json: any): Place {
    return new Place(
      json.id,
      json.number,
      json.letter,
      json.name,
      json.has_hydrometer
    );
  }

}

export interface PlaceFilter {
  page: number;
  size: number;
  address: Address | null;
  sort_orders: SortOrder[];
}