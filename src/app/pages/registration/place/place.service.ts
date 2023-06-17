import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Place, PlaceFilter, PlacePage, PlacePageFilter } from '@model/default/place';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class PlaceService extends DefaultService<Place, PlaceFilter, PlacePage,PlacePageFilter> {

  public get env(): string {
    return `${environment.place}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
