import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TopbarService {
  constructor(private http: HttpClient) {}

  getVersion() {
    return this.http.get('assets/version.txt', { responseType: 'text' });
  }
}
