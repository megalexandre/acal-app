import { SortOrder } from "../link/link.model";

export interface FinancialRecord {
    id: string;
    created_at: string;
    created_by: Date;
    number: string
    total : number;
    reason: string
}

export interface FinancialRecordFilter {
  date_start: Date | null,
  date_end: Date | null,
  page: number;
  size: number;
  sort_orders: SortOrder[];
}

export const DEFAULT_FILTER: FinancialRecordFilter = {
  date_start: null,
  date_end: null,
  page: 0,
  size: 10,
  sort_orders: [{ property: 'name', direction: 'ASC' }]
};