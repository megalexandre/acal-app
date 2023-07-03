import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '@core/list.component';
import { UserPageFilter } from '@model/default/_index';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent  extends ListComponent implements OnInit {
  public page: Page<any>;
  public filter: UserPageFilter = new UserPageFilter()

  constructor(
    public service: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
      super(service, activatedRoute, router, data)
  }

  ngOnInit(): void {
    super.init()
  }
}
