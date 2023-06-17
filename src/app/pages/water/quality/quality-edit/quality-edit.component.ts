import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quality } from '@model/default/quality';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { QualityComponent } from '../quality.component';
import { QualityService } from '../quality.service';

@Component({
  selector: 'ngx-quality-edit',
  templateUrl: './quality-edit.component.html',
  styleUrls: ['./quality-edit.component.scss']
})
export class QualityEditComponent extends QualityComponent implements OnInit {

  public quality: Quality;
  public id: string;
  public loaded: boolean = false;

  constructor(
    public data: DataService,
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

    this.id = this.data.id
    if(!this.id){
      super.back()
    }

    this.service.getById(this.id).subscribe(
      (quality: Quality)=> {
        this.quality = quality;

        const gathering = new FormArray([]);
        quality.gathering.sort((a, b) => a.param > b.param ? 1 : -1).forEach(p=> {
          gathering.push(
            this.formBuilder.group({
              id: [p.id, Validators.required],
              param: [p.param, Validators.required],
              required: [p.required, [Validators.required]],
              analyzed: [p.analyzed, [Validators.required]],
              conformity: [p.conformity, [Validators.required]],
            }))
        })

        this.form = this.formBuilder.group({
          id: [quality.id, Validators.required],
          startedAt: [quality.startedAt, Validators.required],
          gathering: gathering
        })

        this.loaded = true
      }
    )
  }

  public override commit(): void {
    this.service.update(this.form.value).subscribe(
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
