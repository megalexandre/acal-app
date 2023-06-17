import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@model/default/address';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { AddressComponent } from '../address.component';
import { AddressService } from './../address.service';

@Component({
  selector: 'ngx-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent extends AddressComponent implements OnInit {

  constructor(
    public data: DataService,
    public service: AddressService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastrService: NbToastrService,
    ) {
      super(data, formBuilder, activatedRoute, router, service,  toastrService)
    }

  ngOnInit(): void {
    this.createForm()
  }

  override createForm(): void {
    if(!this.data.id){
      this.back()
    }

    this.id = this.data.id
    this.service.getById(this.id).subscribe(
      (address: Address)=> {
        this.address = address;

        this.form = this.formBuilder.group({
          id: [address.id, Validators.required],
          name: [address.name, Validators.required],
        })
        this.loaded = true
      }
    )
  }

  override commit(){
    this.service.update(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro editado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
    )
  }

}
