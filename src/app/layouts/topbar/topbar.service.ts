import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TopbarService {
  private apiUrl = `${environment.apiUrl}/system`;

  constructor(
    private http: HttpClient
  ) {}

  getVersion() {
    return this.http.get('assets/version.txt', { responseType: 'text' });
  }

  backup(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/backup`, {
      responseType: 'blob'
    });
  }
}
