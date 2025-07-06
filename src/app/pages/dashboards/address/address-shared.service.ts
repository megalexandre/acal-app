import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from './address.model';

@Injectable({providedIn: 'root'})
export class AddressSharedService {
  
  private selectedAddress = new BehaviorSubject<Address | null>(null);
  
  public selectedAddress$ = this.selectedAddress.asObservable();

  setSelected(address: Address | null) {
    this.selectedAddress.next(address);
  }

}
