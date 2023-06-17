import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '@model/default/group';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { GroupComponent } from '../group.component';
import { GroupService } from '../group.service';
import { CategoryPipe } from 'app/@pipe';

@Component({
  selector: 'ngx-group-delete',
  templateUrl: './group-delete.component.html',
  styleUrls: ['./group-delete.component.scss']
})
export class GroupDeleteComponent extends GroupComponent implements OnInit {

  categoryName: string = ""

  constructor(
    public formBuilder: FormBuilder,
    public data: DataService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: GroupService,
    public toastrService: NbToastrService,
    public categoryPipe: CategoryPipe,
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
        this.categoryName = this.categoryPipe.transform(group.category)
        this.loaded = true
      }
    )

  }

  override commit(): void {
    this.service.delete(this.data.id).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro deletado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
    )
  }

}
