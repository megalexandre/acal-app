import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, Group } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/category`;

  constructor(private http: HttpClient) {}

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getGroups(): Observable<Group[]> {
    return of([
      { name: 'Sócio Fundador', value: 'FOUNDER' },
      { name: 'Sócio Efetivo', value: 'EFFECTIVE' },
      { name: 'Temporário', value: 'TEMPORARY' },
    ]);
  }

  create(Category: Omit<Category, 'id'>): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, Category);
  }

  update(Category: Category): Observable<Category> {
    return this.http.put<Category>(this.apiUrl, Category);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
