export interface Category {
  id: string;
  name: string
  water_value: number;
  partner_value: number,
  total: number,
  group: string,
  is_hydrometer: Boolean,
}

export interface Group{
  name: string;
  value: string;
}
