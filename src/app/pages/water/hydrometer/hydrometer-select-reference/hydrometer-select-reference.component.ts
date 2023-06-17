import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ReferenceValidator from 'app/@validator/reference.validator';

@Component({
  selector: 'ngx-hydrometer-select-reference',
  templateUrl: './hydrometer-select-reference.component.html',
  styleUrls: ['./hydrometer-select-reference.component.scss']
})
export class HydrometerSelectReferenceComponent implements OnInit {

  @Output()
  public setReference = new EventEmitter<string>();

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
      this.setReference.emit(this.reference)
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
