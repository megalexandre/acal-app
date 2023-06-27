import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Hydrometer, HydrometerFilter, HydrometerPage, HydrometerPageFilter } from '@model/default/hydrometer';
import { HydrometerGenerater, Link } from '@model/default/link';
import { DefaultService } from 'app/@shared/default.service';
import { Observable } from 'rxjs';

@Injectable()
export class HydrometerService extends DefaultService<Hydrometer, HydrometerFilter, HydrometerPage, HydrometerPageFilter> {

  public get env(): string {
    return `${environment.hydrometer}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  public saveAll(d: any[]): Observable<[]>{
    return this.http.post<[]>(`${this.env}`, d);
  }

  public findByReference(reference: string): Observable<HydrometerGenerater[]>{
    return this.http.get<HydrometerGenerater[]>(`${this.env}/findByReference/${reference}`)
  }

}
