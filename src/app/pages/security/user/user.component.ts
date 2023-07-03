import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UserService } from './user.service';

@Component({
  selector: 'ngx-user',
  template: '<router-outlet></router-outlet>',
})
export class UserComponent  {

  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: UserService,
    public toastrService: NbToastrService) {
  }

  createForm(): void {

  }


  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.commit();
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

  get username(): AbstractControl {
    return this.form.get('name')
  }

  get password(): AbstractControl {
    return this.form.get('password')
  }
}
