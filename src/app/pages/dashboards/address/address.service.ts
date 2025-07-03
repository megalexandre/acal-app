import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address.model';


@Injectable()
export class AddressService {
  private apiUrl = `${environment.apiUrl}/address`;

  constructor(private http: HttpClient) {}

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  createAddress(address: Omit<Address, 'id'>): Observable<Address> {
    return this.http.post<Address>(this.apiUrl, address);
  }

  updateAddress(address: Address): Observable<Address> {
    return this.http.put<Address>(this.apiUrl, address);
  }

  deleteAddress(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
