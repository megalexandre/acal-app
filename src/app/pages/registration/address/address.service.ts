import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Address, AddressFilter, AddressPage, AddressPageFilter } from '@model/default/_index';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class AddressService extends DefaultService<Address, AddressFilter, AddressPage, AddressPageFilter> {

  public get env(){
    return `${environment.address}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
