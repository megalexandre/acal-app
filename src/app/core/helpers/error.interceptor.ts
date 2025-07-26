import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(

      catchError((e: HttpErrorResponse) => {
        if (e.status === 401) {
            this.authenticationService.logout();
        }

        if(e.error.name === 'DUPLICATE_KEY') {
            return throwError(() => new Error('Já existe um registro esses dados'));
        }

        const error = e.error?.message || e.statusText;
        return throwError(() => new Error(error));
      }),
    );
  }

}