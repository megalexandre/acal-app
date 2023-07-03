import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { User, UserFilter, UserPage, UserPageFilter } from '@model/default/_index';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class UserService extends DefaultService<User, UserFilter, UserPage, UserPageFilter> {

  public get env(): string {
    return `${environment.user}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
