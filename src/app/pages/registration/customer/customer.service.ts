import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Customer, CustomerFilter, CustomerPage, CustomerPageFilter } from '@model/default/_index';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class CustomerService extends DefaultService<Customer, CustomerFilter, CustomerPage, CustomerPageFilter> {

  public get env(): string {
    return `${environment.customer}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
