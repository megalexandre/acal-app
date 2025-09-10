import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WaterMeterService {
  private apiUrl = `${environment.apiUrl}/water-meter`;

  constructor(private http: HttpClient) {}


}
