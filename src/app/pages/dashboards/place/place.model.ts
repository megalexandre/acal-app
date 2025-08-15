import { Address } from "../address/address.model";
import { SortOrder } from "../link/link.model";

export interface Place {

  id: string,
  number: string,
  letter: string,
  address: Address,
  has_hydrometer: boolean

}

export interface PlaceFilter {
  page: number;
  size: number;
  address: Address | null;
  sort_orders: SortOrder[];
}