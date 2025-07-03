import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from './address.model';

@Injectable()
export class AddressSharedService {
  
    private selectedAddress = new BehaviorSubject<Address | null>(null);
    selectedAddress$ = this.selectedAddress.asObservable();

    setSelected(address: Address | null) {
        this.selectedAddress.next(address);
    }
}
