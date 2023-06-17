import { DataService } from 'app/@shared/data.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AddressComponent } from '../address.component';
import { AddressService } from '../address.service';

@Component({
  selector: 'ngx-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.scss']
})
export class AddressAddComponent extends AddressComponent implements OnInit {

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: AddressService,
    public toastrService: NbToastrService,
  ) {
    super(data, formBuilder,activatedRoute, router, service, toastrService );
  }

  ngOnInit(): void {
    this.createForm()
  }

  override createForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
    })
  }

  override commit(){
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
