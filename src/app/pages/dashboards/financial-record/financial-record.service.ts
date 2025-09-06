import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { format } from 'date-fns';
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
    const payload = {
      ...filter,
      date_start: filter.date_start ? format(new Date(filter.date_start), "yyyy-MM-dd'T'HH:mm:ss") : null,
      date_end: filter.date_end ? format(new Date(filter.date_end), "yyyy-MM-dd'T'HH:mm:ss") : null,
    };

    return this.http.post<Page<FinancialRecord>>(`${this.apiUrl}/paginate`, payload);
  }
}
