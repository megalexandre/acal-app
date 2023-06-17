import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '@model/default/place';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { PlaceComponent } from '../place.component';
import { PlaceService } from './../place.service';

@Component({
  selector: 'ngx-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent extends PlaceComponent implements OnInit {

  constructor(
    public data: DataService,
    public service: PlaceService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastrService: NbToastrService,
    ) {
      super(data, formBuilder, activatedRoute, router, service, toastrService)
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
    if(!this.data.id){
      this.back()
    }
    this.id = this.data.id

    this.service.getById(this.id).subscribe(
      (place: Place)=> {
        this.place = place;

        this.form = this.formBuilder.group({
          id: [place.id, Validators.required],
          number: [place.number, Validators.required],
          letter: [place.letter, Validators.required],
          address: [place.address, Validators.required],
          hasHydrometer: [place.hasHydrometer],
          other: [place.other],
        })
        this.loaded = true
      }
    )
  }

  commit(): void {
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
