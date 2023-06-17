import { DefaultFilter, DefaultModel, DefaultModelPage, DefaultFilterPage } from "./_index";

export interface Address extends DefaultModel {
  name?: string,
}

export class AddressFilter implements DefaultFilter {
  id?: string = null;
  name?: string = null;

  reset(): void {
    this.id = null;
    this.name = null;
  }
}

export interface AddressPage extends DefaultModelPage {
  id?: string;
  name?: string;
}

export class AddressPageFilter extends DefaultFilterPage {
  id?: string = '';
  name?: string = '';

  reset(){
    super.reset()
    this.id = '';
    this.name = '';
  }

}

