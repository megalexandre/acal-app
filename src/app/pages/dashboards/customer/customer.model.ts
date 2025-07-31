import { SortOrder } from "../link/link.model";

export interface Customer {
    id: string;
    name: string;
    identity_card: string;
    phone_number: string | null;
    partner_number: string | null;
    voter: boolean;
}


export interface CustomerFilter {
  name: string | null;
  identity_card: string | null;
  page: number;
  size: number;
  sort_orders: SortOrder[];
}

export const DEFAULT_CUSTOMER_FILTER: CustomerFilter = {
  name: null,
  identity_card: null,
  page: 0,
  size: 10,
  sort_orders: [{ property: 'name', direction: 'ASC' }]
};