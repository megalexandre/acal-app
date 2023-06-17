import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ReferenceValidator from 'app/@validator/reference.validator';

@Component({
  selector: 'ngx-invoice-generate',
  templateUrl: './invoice-generate.component.html',
})
export class InvoiceGenerateComponent implements OnInit {

  public form: FormGroup;
  public reference: string = null ;
  public submmited = false;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      reference: [null, [Validators.required, ReferenceValidator.valid()]],
    })
  }

  submit(){
    if(this.form.valid){
      this.submmited = true
      this.reference = this._reference.value
    }
  }

  clear(){
    this.form.reset()
    this.reference = null;
    this.submmited = false;
  }

  public getStatus(value: string): ('success'|'basic'|'danger') {

    if(this.form.get(value).valid && (this.submmited) ){
      return 'success'
    } else if (!this.form.get(value).valid &&  (this.submmited)){
      return 'danger'
    }

    return 'basic'
  }

  get _reference(){
    return this.form.get('reference')
  }

}
