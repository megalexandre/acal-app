import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private apiUrl = `${environment.apiUrl}/address`;

  constructor(private http: HttpClient) {}

  get(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  create(address: Omit<Address, 'id'>): Observable<Address> {
    return this.http.post<Address>(this.apiUrl, address);
  }

  update(address: Address): Observable<Address> {
    return this.http.put<Address>(this.apiUrl, address);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
