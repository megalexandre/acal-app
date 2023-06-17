import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'app/@shared/data.service';
import { Customer } from '@model/default/customer';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import DocumentValidator from 'app/@validator/document.validator';
import DateValidator from 'app/@validator/date.validator';
import { CustomerComponent } from '../customer.component';

@Component({
  selector: 'ngx-customer-edit',
  templateUrl: './customer-edit.component.html',
})
export class CustomerEditComponent extends CustomerComponent implements OnInit {

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

        this.form = this.formBuilder.group({
          id: [customer.id, Validators.required],
          name: [customer.name, Validators.required],
          document: [customer.document, [Validators.required, DocumentValidator.valid() ]],
          birthDay: [customer.birthDay,  [DateValidator.valid()]],
          phoneNumber: [customer.phoneNumber],
          personType: [customer.personType],
          membershipNumber: [customer.membershipNumber, Validators.required],
        })
        this.loaded = true
      }
    )
  }

  public override commit(): void {
    this.service.update(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Atualizado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }

    )
  }

}
