 import { Category } from "../category/category.model";
import { Customer } from "../customer/customer.model";
import { SortOrder } from "../link/link.model";
import { Place } from "../place/place.model";

export interface Invoice {
  id: string;
  reference: string;
  place: Place;
  customer: Customer;
  category: Category;
  total: number;
  consumption: number;
  water_value: number;
  due_date: Date;
}

export interface SelectableInvoice extends Invoice  {
  checked: boolean;
}

export interface SelectableInvoiceGroup {
  name: string;
  checked: boolean;
  items: SelectableInvoice[];
}  

export interface InvoicePreviewTable {
  items: SelectableInvoiceGroup[];
}

export interface InvoiceFilter {
  page: number;
  size: number;
  sort_orders: SortOrder[];
}