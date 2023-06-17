import { DefaultFilter, DefaultFilterPage, Link } from "./_index";

export interface Hydrometer {
  id: string,
  reference: string,
  costValue: number,
  consumption: number,
  link: Link,
  linkName?: String,
  personName?: String,
}

export interface HydrometerPage extends Hydrometer{}

export interface HydrometerFilter extends DefaultFilter {
  id?: string,
  name?: string,
}

export class HydrometerPageFilter extends DefaultFilterPage {

  id?: string = null;
  reference?: string = null;
  costValue?: number = null;
  consumption?: number = null;
  link?: Link = null;
  linkName?: String = null;
  personName?: String = null;

  reset(){
    super.reset()
    this.id = null;
    this.reference = null;
    this.costValue = null;
    this.consumption = null;
    this.link = null;
    this.linkName = null;
    this.personName = null;
  }

}


