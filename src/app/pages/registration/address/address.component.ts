import { DataService } from 'app/@shared/data.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AddressService } from './address.service';
import { Address } from '@model/default/address';

@Component({
  selector: 'ngx-address',
  template: '<router-outlet></router-outlet>',
})
export class AddressComponent {

  public id: string;
  public loaded: boolean = false;
  public form: FormGroup;
  public submmited: boolean = false;
  public address: Address;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: AddressService,
    public toastrService: NbToastrService,
  ) { }


  createForm(): void {}


  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.commit()
  }

  public commit(){}

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  public getStatus(value: string): ('success'|'basic'|'danger') {

    if(this.form.get(value).valid && (this.form.get(value).touched || (this.submmited) )){
      return 'success'
    } else if (!this.form.get(value).valid &&  (this.form.get(value).touched || (this.submmited))){
      return 'danger'
    }

    return 'basic'
  }

  get name(): AbstractControl {
    return this.form.get('name')
  }
}
