import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { QualityService } from '../quality.service';
import { QualityComponent } from './../quality.component';
import { params } from '@model/default/quality';

@Component({
  selector: 'ngx-quality-add',
  templateUrl: './quality-add.component.html',
})
export class QualityAddComponent extends QualityComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: QualityService,
    public toastrService: NbToastrService
  ) {
    super(formBuilder, activatedRoute, router, service, toastrService)
   }

  ngOnInit(): void {
    this.createForm()
  }

  override createForm(): void {
    const gathering = new FormArray([]);
    params.sort((a, b) => a.title > b.title ? 1 : -1).forEach(p=> {
      gathering.push(
        this.formBuilder.group({
          param: [p.title, Validators.required],
          required: [6, [Validators.required]],
          analyzed: [6, [Validators.required]],
          conformity: [6, [Validators.required]],
        }))
    })

    this.form = this.formBuilder.group({
      reference: [null, Validators.required],
      gathering: gathering
    })
  }

  public override commit(): void {
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
