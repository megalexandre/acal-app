import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '@core/list.component';
import { PlacePage, PlacePageFilter } from '@model/default/place';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { PlaceService } from '../place.service';

@Component({
  selector: 'ngx-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent extends ListComponent implements OnInit {

  public filter: PlacePageFilter = new PlacePageFilter();

  public page: Page<PlacePage>;

  constructor(
    public service: PlaceService,
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
