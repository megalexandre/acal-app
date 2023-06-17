import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Group } from '@model/default/group';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { GroupService } from './group.service';

@Component({
  selector: 'ngx-group',
  template: '<router-outlet></router-outlet>',
})
export class GroupComponent {

  public id: string;
  public loaded: boolean = false;
  public group: Group;
  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public data: DataService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: GroupService,
    public toastrService: NbToastrService,
    ) { }


  createForm() {

  }

  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

    this.commit()
  }

  commit(){}

  selectCategory(category: Category){
    this.category.setValue(category)
  }

  selectCurrency(value: number){
    this.value.setValue(value)
  }

  selectCategoryCurrency(value: number){
    this.categoryValue.setValue(value)
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

  get category(): AbstractControl {
    return this.form.get('category')
  }

  get value(): AbstractControl {
    return this.form.get('value')
  }

  get categoryValue(): AbstractControl{
    return this.form.get('categoryValue')
  }
}
