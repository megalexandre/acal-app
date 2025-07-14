import { Category } from "../category/category.model";
import { Customer } from "../customer/customer.model";
import { Place } from "../place/place.model";

export interface SortOrder {
  property: string;
  direction: 'ASC' | 'DESC';
}

export interface LinkFilter {
  name?: string;
  category?: string;
  address?: string;
  total?: number;
  page: number;
  size: number;
  sort_orders: SortOrder[];
}

export interface Page<T> {
  "content": T[],
  "pageable": {
      "page_number": number,
      "page_size": number,
      "sort": {
          "empty": boolean,
          "sorted": boolean,
          "unsorted": boolean
      },
      "offset": number,
      "paged": boolean,
      "unpaged": boolean
    },
    "last": boolean,
    "total_elements": number,
    "total_pages": number,
    "first": boolean,
    "size": number,
    "number": number,
    "sort": {
        "empty": boolean,
        "sorted": boolean,
        "unsorted": boolean
    },
    "number_of_elements": number,
    "empty": boolean
}

export class Link {
  constructor(
    public id: string,
    public number: string,
    public category: Category,
    public customer: Customer,
    public place: Place,
    public total: number,
    public exclusive_member: boolean,
    public active: boolean
  ) {}

  static fromJson(json: any): Link {
    return new Link(
      json.id,
      json.number,
      json.category,
      json.customer,
      Place.fromJson(json.place),
      json.total,
      json.exclusive_member,
      json.active
    );
  }
}
