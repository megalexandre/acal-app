import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '@core/list.component';
import { CustomerPageFilter } from '@model/default/customer';
import { DataService } from 'app/@shared/data.service';
import { CustomerService } from '../customer.service';
import { Page } from '@model/page';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent extends ListComponent implements OnInit {

  public page: Page<any>;
  public filter: CustomerPageFilter = new CustomerPageFilter()

  constructor(
    public service: CustomerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public data: DataService,
    ){
      super(service, activatedRoute, router, data)
  }

  ngOnInit(): void {
    super.init()
  }

  public togglePersonType(){
    this.filter.document = null;

    if(this.filter.personType.name === 'LEGAL'){
      this.filter.personType.name = 'PERSON'
    } else {
      this.filter.personType.name = 'LEGAL'
    }
  }



}
