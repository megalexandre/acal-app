import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '@core/list.component';
import { HydrometerPage, HydrometerPageFilter } from '@model/default/hydrometer';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { HydrometerService } from '../hydrometer.service';

@Component({
  selector: 'ngx-hydrometer-list',
  templateUrl: './hydrometer-list.component.html',
})
export class HydrometerListComponent extends ListComponent implements OnInit {

  public filter: HydrometerPageFilter = new HydrometerPageFilter();
  public page: Page<HydrometerPage>;

  constructor(
    public service: HydrometerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
    super(service, activatedRoute, router, data)
  }

  ngOnInit(): void {
    this.init();
  }

}
