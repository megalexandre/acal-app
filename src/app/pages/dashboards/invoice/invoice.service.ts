import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from './invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl = `${environment.apiUrl}/invoice`;

  constructor(private http: HttpClient) {}

  get(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl);
  }

  create(invoice: Omit<Invoice, 'id'>): Observable<Invoice> {
    return this.http.post<Invoice>(this.apiUrl, invoice);
  }

  update(invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(this.apiUrl, invoice);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  view(reference: String): Observable<Invoice[]>{
     return this.http.get<Invoice[]>(`${this.apiUrl}/view/${reference}`);
  }
}
