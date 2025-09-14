import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WaterMeter, WaterMeterPreview } from './water-meter.model';
import { Observable } from 'rxjs';
import { Page } from '../link/link.model';

@Injectable({
  providedIn: 'root',
})
export class WaterMeterService {
  private apiUrl = `${environment.apiUrl}/water-meter`;

  constructor(private http: HttpClient) {}

  paginate(filter: {}): Observable<Page<WaterMeter>> {
    return this.http.post<Page<WaterMeter>>(`${this.apiUrl}/paginate`, filter);
  }

  preview(reference: string): Observable<WaterMeterPreview[]>{
    return this.http.get<WaterMeterPreview[]>(`${this.apiUrl}/preview/${reference}`);
  }

  create(items: Omit<WaterMeterPreview, 'name'>[]): Observable<WaterMeterPreview[]> {
      return this.http.post<WaterMeterPreview[]>(`${this.apiUrl}/all`, items);
  }


}
