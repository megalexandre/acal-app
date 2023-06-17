import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '@model/default/customer';
import { Group } from '@model/default/group';
import { Place } from '@model/default/place';
import { NbToastrService } from '@nebular/theme';
import { LinkService } from '../link.service';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.scss']
})
export class LinkAddComponent implements OnInit {

  public form: FormGroup;
  public submmited: boolean = false;
  public index: string = 'usuario';
  public user: any

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: LinkService,
    private toastrService: NbToastrService,
    private authService: NbAuthService,
    ) {

      this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
        }
      });
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customer: [null, Validators.required],
      group: [null, Validators.required],
      place: [null, Validators.required],
      mailPlace: [null, Validators.required],
      createdBy: [this.user.name, Validators.required]
    })
  }

  public selectCustomer(customer: Customer){
    this.customer.setValue(customer)
  }

  public selectPlace(place: Place){
    this.place.setValue(place)
  }

  public selectMailPlace(place: Place){
    this.mailPlace.setValue(place)
  }

  public selectGroup(group: Group){
    this.group.setValue(group)
  }

  public submit(){
    this.submmited = true;

    if(this.form.invalid){
      return
    }

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

  get customer(): AbstractControl {
    return this.form.get('customer')
  }

  get place(): AbstractControl {
    return this.form.get('place')
  }

  get group(): AbstractControl {
    return this.form.get('group')
  }

  get mailPlace(): AbstractControl {
    return this.form.get('mailPlace')
  }

}
