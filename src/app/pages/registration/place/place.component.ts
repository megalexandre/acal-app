import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '@model/default/place';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { PlaceService } from './place.service';
import { Address } from '@model/default/address';

@Component({
  selector: 'ngx-place',
  template: '<router-outlet></router-outlet>',
})
export class PlaceComponent {

  public id: string;
  public loaded: boolean = false;
  public place: Place;
  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    public data: DataService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: PlaceService,
    public toastrService: NbToastrService,
    ) {
  }

  createForm(): void {

  }

  selectAddress(address: Address){
    this.address.setValue(address)
  }

  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }
    this.commit()
  }

  commit(){

  }

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

  get number(): AbstractControl {
    return this.form.get('number')
  }

  get letter(): AbstractControl {
    return this.form.get('letter')
  }

  get address(): AbstractControl {
    return this.form.get('address')
  }

  get hasHydrometer(): AbstractControl {
    return this.form.get('hasHydrometer')
  }


}
