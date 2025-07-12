import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WaterParam, WaterQuality } from './water-quality.model';

@Injectable({
  providedIn: 'root',
})
export class WaterQualityService {
  private apiUrl = `${environment.apiUrl}/water-quality`;

  constructor(private http: HttpClient) {}

  get(): Observable<WaterQuality[]> {
    return this.http.get<WaterQuality[]>(this.apiUrl);
  }

  create(water_quality: Omit<WaterQuality, 'id'>): Observable<WaterQuality> {
    return this.http.post<WaterQuality>(this.apiUrl, water_quality);
  }

  update(water_quality: WaterQuality): Observable<WaterQuality> {
    return this.http.put<WaterQuality>(this.apiUrl, water_quality);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getWaterParams(): Observable<WaterParam[]> {
    return of([
      { name: 'Cloro - Min 0,2 mg/l'},
      { name: 'Coliformes Totais'},
      { name: 'Cor aparente - 15UH'},
      { name: 'Eschirichia Coli'},
      { name: 'Turbidez - 5.0 UT'},
    ]);
  }
}
