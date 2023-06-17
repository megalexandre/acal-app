import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '@model/default/customer';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { CustomerComponent } from '../customer.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'ngx-customer-delete',
  templateUrl: './customer-delete.component.html',
})
export class CustomerDeleteComponent extends CustomerComponent implements OnInit  {

  public customer: Customer;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
    public service: CustomerService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastrService: NbToastrService,
  ) {
    super(formBuilder, activatedRoute, router, service, toastrService )
  }

  ngOnInit(): void {
    this.id = this.data.id
    if(!this.id){
      super.back()
    }

    this.service.getById(this.id).subscribe(
      (customer: Customer)=> {
        this.customer = customer;
        this.loaded = true

      }
    )
  }

  override commit(): void {
    this.service.delete(this.id).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Excluido`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
      )
  }

}

