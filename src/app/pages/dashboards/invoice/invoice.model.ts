import { Category } from "../category/category.model";
import { Customer } from "../customer/customer.model";
import { Place } from "../place/place.model";

export interface Invoice {
    id: string;
    reference: string;
    place: Place;
    customer: Customer;
    category: Category;
    total: number;
}

export interface InvoicesPreview {
    name: string;
    checked: boolean;
    InvoicePreviews: InvoicePreview[];
}

export interface InvoicePreview extends Invoice {
  checked: boolean;
  count: number
}