import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Hydrometer } from '@model/default/hydrometer';
import { Link, LinkFilter, LinkPage, LinkPageFilter } from '@model/default/link';
import { DefaultService } from 'app/@shared/default.service';
import { Observable } from 'rxjs';

@Injectable()
export class LinkService extends DefaultService<Link, LinkFilter, LinkPage, LinkPageFilter> {

  public get env(): string {
    return `${environment.link}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  public listLinkWithoutInvoice(referece: String): Observable<Link[]> {
    return this.http.get<Link[]>(`${this.env}/list/${referece}`);
  }

  public inactivate(id: String): Observable<any> {
    return this.http.delete<Link>(`${this.env}/inactive/${id}`);
  }

  public getHydrometerByLinkAndReference(link: String, reference: String): Observable<Hydrometer> {
    return this.http.get<Hydrometer>(`${environment.hydrometer}/link/${link}/reference/${reference}`);
  }

  public save(link: Link): Observable<Link>{
    return this.http.post<Link>(`${this.env}`, {
      customerId: link.customer.id,
      groupId: link.group.id,
      placeId: link.place.id,
      mailPlaceId: link.mailPlace.id,
      createdBy: link.createdBy
      }
    );
  }

}
