import { GroupComponent } from './../group.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Group } from '@model/default/group';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent extends GroupComponent implements OnInit {

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

    if(!this.data.id){
      this.back()
    }

    this.id = this.data.id

    this.service.getById(this.id).subscribe(
      (group: Group)=> {
        this.group = group;

        this.form = this.formBuilder.group({
          id: [group.id],
          name: [group.name, Validators.required],
          category: [group.category, [Validators.required]],
          value: [group.value,  [Validators.required]],
          categoryValue: [group.categoryValue,  [Validators.required]],
        })
        this.loaded = true
      }
    )

  }

  override commit(): void {
    this.service.update(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Editado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
    )
  }

}
