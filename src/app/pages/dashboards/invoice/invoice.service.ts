import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice, InvoiceFilter } from './invoice.model';
import { Page } from '../link/link.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl = `${environment.apiUrl}/invoice`;

  constructor(private http: HttpClient) {}

  get(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl);
  }

  paginate(filter: InvoiceFilter): Observable<Page<Invoice>> {
    return this.http.post<Page<Invoice>>(`${this.apiUrl}/paginate`, filter);
  }

  create(invoices: Omit<Invoice, 'id'>[]): Observable<Invoice[]> {
    return this.http.post<Invoice[]>(`${this.apiUrl}/all`, invoices);
  }

  update(invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(this.apiUrl, invoice);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  preview(reference: string): Observable<Invoice[]>{
     return this.http.get<Invoice[]>(`${this.apiUrl}/preview/${reference}`);
  }

  pay(id: String){
    return this.http.post(`${this.apiUrl}/pay/${id}`, {});
  }

  cancelPayment(id: String){
    return this.http.post(`${this.apiUrl}/cancel-payment/${id}`, {});
  }
}
