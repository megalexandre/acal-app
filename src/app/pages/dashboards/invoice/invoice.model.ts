 import { Address } from "../address/address.model";
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
  water_quality: WaterQuality;
  due_date: Date;
  values: InvoiceValue[];
  number: number;
  paid_at?: Date; 
  paid: boolean;
}

export interface WaterQuality {
  id: string;
  reference: string;
  analysis: WaterAnalysis[];
}

export interface WaterAnalysis {
  name: string;
  required: string;
  analyzed: string;
  conformity: string;
}

export interface InvoiceValue{
  name: string,
  value: number
}

export interface SelectableInvoice extends Invoice  {
  checked: boolean;
}

export interface SelectableInvoiceGroup {
  name: string;
  checked: boolean;
  items: SelectableInvoice[];
  count: number;
}  

export interface InvoicePreviewTable {
  items: SelectableInvoiceGroup[];

}

export interface Filter {
  page: number;
  size: number;
  sort_orders: SortOrder[];
}

export interface InvoiceFilter extends Filter {
  address: Address | null;
  reference?: string | null;
  number?: string  | null;
  status?: 'paid' | 'not_paid' | null;
}