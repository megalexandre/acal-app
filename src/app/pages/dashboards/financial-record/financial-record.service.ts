import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../link/link.model';
import { FinancialRecord, FinancialRecordFilter } from './financial-record.model';

@Injectable({
  providedIn: 'root',
})
export class FinancialRecordService {
  private apiUrl = `${environment.apiUrl}/financial-record`;

  constructor(private http: HttpClient) {}

  paginate(filter: FinancialRecordFilter): Observable<Page<FinancialRecord>> {
    return this.http.post<Page<FinancialRecord>>(`${this.apiUrl}/paginate`, filter);
  }

}
