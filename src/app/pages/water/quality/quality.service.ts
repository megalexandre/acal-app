import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Quality, QualityFilter, QualityPage, QualityPageFilter } from '@model/default/quality';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class QualityService extends DefaultService<Quality, QualityFilter, QualityPage, QualityPageFilter> {

  public get env(): string {
    return `${environment.quality}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
