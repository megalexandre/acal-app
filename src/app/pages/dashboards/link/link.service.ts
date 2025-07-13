import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Link, LinkFilter, Page } from './link.model';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private apiUrl = `${environment.apiUrl}/link`;

  constructor(private http: HttpClient) {}

  paginate(filter: LinkFilter): Observable<Page<Link>> {
    return this.http.post<Page<Link>>(`${this.apiUrl}/paginate`, filter).pipe(
      map(response => {
        response.content = response.content.map(linkJson => Link.fromJson(linkJson));
        return response;
      })
    );
  }
  
  create(Link: Omit<Link, 'id'>): Observable<Link> {
    return this.http.post<Link>(this.apiUrl, Link);
  }

  update(Link: Link): Observable<Link> {
    return this.http.put<Link>(this.apiUrl, Link);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
