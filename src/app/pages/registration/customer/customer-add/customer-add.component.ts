import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import DateValidator from 'app/@validator/date.validator';
import DocumentValidator from 'app/@validator/document.validator';
import { CustomerComponent } from '../customer.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'ngx-customer-add',
  templateUrl: './customer-add.component.html',
})
export class CustomerAddComponent extends CustomerComponent implements OnInit{

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: CustomerService,
    public toastrService: NbToastrService,
    ) {
    super(formBuilder, activatedRoute, router, service, toastrService);
  }

  ngOnInit(): void {
    this.createForm()
  }

  override createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      document: [null, [Validators.required, DocumentValidator.valid() ]],
      birthDay: [null, [DateValidator.valid()]],
      phoneNumber: [null],
      personType: ['PERSON'],
      membershipNumber: [null, Validators.required],
    })
  }

  public override commit(): void {
    this.service.save(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Novo Registro adicionado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }

    )
  }




}
