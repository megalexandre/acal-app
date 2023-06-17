import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Dashboard } from '@model/default/dashboard';
import { Observable } from 'rxjs';

@Injectable()
export class HomepageService {

  constructor(private http: HttpClient) {
  }

  public get(): Observable<Dashboard>{
    return this.http.get<Dashboard>(`${environment.api+'dashboard'}`);
  }

}
