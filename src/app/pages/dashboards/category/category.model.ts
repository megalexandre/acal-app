export enum Group {
  FOUNDER = "1",
  EFFECTIVE = "2",
  TEMPORARY = "3"
}

export interface Category {
  id: string;
  name: string
  water_value: number;
  partner_value: number,
  total: number,
  group: Group,
  is_hydrometer: Boolean,
}

