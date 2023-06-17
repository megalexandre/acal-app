import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressPage, AddressPageFilter } from '@model/default/address';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { AddressService } from '../address.service';
import { ListComponent } from '@core/list.component';

@Component({
  selector: 'ngx-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent extends ListComponent implements OnInit {

  public filter: AddressPageFilter = new AddressPageFilter()

  public page: Page<AddressPage>;
  public loading: boolean =  false;

  constructor(
    public service: AddressService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public dataService: DataService,
    ){
    super(service, activatedRoute, router, dataService)
  }

  ngOnInit(): void {
    super.init();
  }

}
