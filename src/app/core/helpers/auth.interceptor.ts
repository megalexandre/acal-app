import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Intercepta apenas o login
    if (req.url.endsWith('/auth/signin') && req.method === 'POST') {
      // Estrutura esperada pelo efeito NgRx
      const user = {
        id: 1,
        email: req.body.email,
        username: 'mockuser',
        firstName: 'Mock',
        lastName: 'User',
      };
      const body = {
        status: 'success',
        data: user,
        token: 'mock-jwt-token'
      };
      return of(new HttpResponse({ status: 200, body }));
    }
    // Passa as outras requisições normalmente
    return next.handle(req);
  }
}

export const mockAuthInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: MockAuthInterceptor, multi: true }
];