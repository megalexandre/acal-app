import { DataService } from './../../../../@shared/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../group.service';
import { GroupComponent } from './../group.component';
@Component({
  selector: 'ngx-group-add',
  templateUrl: './group-add.component.html',
})
export class GroupAddComponent extends GroupComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public data: DataService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: GroupService,
    public toastrService: NbToastrService,
    ) {
      super(formBuilder, data, activatedRoute, router, service, toastrService)
    }


  ngOnInit(): void {
    this.createForm()
  }

  override createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      category: [null, [Validators.required]],
      value: [null,  [Validators.required]],
      categoryValue: [null,  [Validators.required]],
    })
  }

  override commit(){
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
