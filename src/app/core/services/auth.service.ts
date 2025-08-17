import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/store/Authentication/auth.models';
import { loginFailure, logout } from 'src/app/store/Authentication/authentication.actions';
import { getFirebaseBackend } from '../../authUtils';
import { GlobalComponent } from '../../global-component';
import { environment } from 'src/environments/environment';

const AUTH_API = GlobalComponent.AUTH_API;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private apiUrl = `${environment.apiUrl}/auth`;
  
  user!: User;
  currentUserValue: any;

  private currentUserSubject: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')!));
  }

  login(name: string, password: string) {
    return this.http.post(`${environment.apiUrl}/auth/login`,
        {
          name,
          password,
        },
          httpOptions,
        )
        .pipe(
          map((response: any) => {
            const user = response;
            return user;
          }),
          catchError((error: any) => {
            const errorMessage = 'Login failed';
            return throwError(() => new Error(errorMessage));
          }),
        );
  }


  register(email: string, first_name: string, password: string) {
    return this.http
      .post(
        AUTH_API + 'signup',
        {
          email,
          first_name,
          password,
        },
        httpOptions,
      )
      .pipe(
        map((response: any) => {
          const user = response;
          return user;
        }),
        catchError((error: any) => {
          const errorMessage = 'Login failed';
          this.store.dispatch(loginFailure({ error: errorMessage }));
          return throwError(errorMessage);
        }),
      );
  }


  /**
   * Returns the current user
   */
  public currentUser(): any {
    return getFirebaseBackend()!.getAuthenticatedUser();
  }

  /**
   * Logout the user
   */
  logout() {
    this.store.dispatch(logout());
    // logout the user
    // return getFirebaseBackend()!.logout();
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    this.currentUserSubject.next(null!);

    return of(undefined).pipe();
  }

  resetPassword(email: string) {
    return getFirebaseBackend()!
      .forgetPassword(email)
      .then((response: any) => {
        const message = response.data;
        return message;
      });
  }
}
