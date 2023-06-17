import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Group, GroupFilter, GroupPage, GroupPageFilter } from '@model/default/_index';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class GroupService extends DefaultService<Group, GroupFilter, GroupPage, GroupPageFilter> {

  public get env(): string {
    return `${environment.group}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
