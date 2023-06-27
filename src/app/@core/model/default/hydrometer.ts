import { Link } from "./_index";

export interface Hydrometer {
  id: string,
  reference: string,
  costValue: number,
  consumption: number,
  link: Link,
  linkName?: String,
  personName?: String,
}

export interface SaveHydrometer{
  reference: String,
  costValue: number,
  consumption: number,
  link: LinkRequest,
}

export interface LinkRequest {
  id: string
}


export interface HydrometerPage {
  id: string,
  reference: string,
  costValue: number,
  consumption: number,
  link: Link,
  linkName?: String,
  personName?: String,
}

export interface HydrometerFilter {
  id?: string,
  name?: string,
}

export class HydrometerPageFilter {

  id?: string = null;
  reference?: string = null;
  costValue?: number = null;
  consumption?: number = null;
  link?: Link = null;
  linkName?: String = null;
  personName?: String = null;

  page: number = 0;
  pageSize: number = 10;
  direction: string = 'ASC';
  sortedField: string = 'id';

  reset(){
    this.id = null;
    this.reference = null;
    this.costValue = null;
    this.consumption = null;
    this.link = null;
    this.linkName = null;
    this.personName = null;
  }

}


