import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CustomerService } from './customer.service';

@Component({
  selector: 'ngx-customer',
  template: '<router-outlet></router-outlet>',
})
export class CustomerComponent {

  public form: FormGroup;
  public submmited: boolean = false;
  public personTypeValue : 'PERSON'|'LEGAL' = 'PERSON';

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: CustomerService,
    public toastrService: NbToastrService) {
  }

  createForm(): void {

  }

  public togglePersonType(){

    if(this.personTypeValue === 'LEGAL'){
      this.personTypeValue = 'PERSON'
      this.membershipNumber.addValidators(Validators.required)
    } else {
      this.personTypeValue = 'LEGAL';
      this.membershipNumber.clearValidators();
    }

    this.membershipNumber.updateValueAndValidity()
    this.personType.setValue(this.personTypeValue);
    this.document.setValue(null);
  }


  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.commit();
  }

  public commit(){}

  public setDate(date: string){
    this.birthDay.setValue(date);
  }

  public setBirthDayTouched(){
    this.birthDay.markAllAsTouched()
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

  get name(): AbstractControl {
    return this.form.get('name')
  }

  get personType(): AbstractControl {
    return this.form.get('personType')
  }

  get birthDay(): AbstractControl {
    return this.form.get('birthDay')
  }

  get phoneNumber(): AbstractControl {
    return this.form.get('phoneNumber')
  }

  get document(): AbstractControl {
    return this.form.get('document')
  }

  get membershipNumber(): AbstractControl {
    return this.form.get('membershipNumber')
  }

}
