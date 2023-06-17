import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quality, QualityPage, QualityPageFilter } from '@model/default/quality';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { QualityService } from '../quality.service';
import { ListComponent } from '@core/list.component';

@Component({
  selector: 'ngx-quality-list',
  templateUrl: './quality-list.component.html',
  styleUrls: ['./quality-list.component.scss']
})
export class QualityListComponent extends ListComponent implements OnInit {

  public filter: QualityPageFilter = new QualityPageFilter()

  public page: Page<QualityPage>;

  constructor(
    public service: QualityService,
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
