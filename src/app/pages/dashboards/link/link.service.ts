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
     const payload = {
      ...filter,
        group_name: filter.group ? filter.group.value: null, 
        category_id: filter.category ? filter.category.id: null,
        address_id: filter.address ? filter.address.name: null,
      };

      delete (payload as any).group;
      delete (payload as any).category
      delete (payload as any).address
    
    return this.http.post<Page<Link>>(`${this.apiUrl}/paginate`, payload).pipe(
      map(response => {
        response.content = response.content.map(linkJson => Link.fromJson(linkJson));
        return response;
      })
    );
  }
  
  create(request: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
  }

  update(Link: Link): Observable<Link> {
    return this.http.put<Link>(this.apiUrl, Link);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
