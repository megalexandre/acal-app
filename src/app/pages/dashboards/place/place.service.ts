import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place, PlaceFilter } from './place.model';
import { Page } from '../link/link.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private apiUrl = `${environment.apiUrl}/place`;

  constructor(private http: HttpClient) {}

  paginate(filter: PlaceFilter): Observable<Page<Place>> {
    return this.http.post<Page<Place>>(`${this.apiUrl}/paginate`, filter);
  }

  get(): Observable<Place[]> {
    return this.http.get<Place[]>(this.apiUrl);
  }

  create(Place: Omit<Place, 'id'>): Observable<Place> {
    return this.http.post<Place>(this.apiUrl, Place);
  }

  update(Place: Place): Observable<Place> {
    return this.http.put<Place>(this.apiUrl, Place);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
