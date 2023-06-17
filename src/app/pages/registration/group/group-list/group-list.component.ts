import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Group, GroupFilter, GroupPage, GroupPageFilter } from '@model/default/group';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { GroupService } from '../group.service';
import { ListComponent } from '@core/list.component';

@Component({
  selector: 'ngx-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent extends ListComponent implements OnInit {

  public filter: GroupPageFilter = new GroupPageFilter()
  public page: Page<GroupPage>;

  constructor(
    public service: GroupService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
    super(service, activatedRoute, router, data)
  }

  ngOnInit(): void {
    this.init()
  }

}
