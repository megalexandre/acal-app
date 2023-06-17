import { Hydrometer } from '@model/default/hydrometer';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/@shared/data.service';
import { HydrometerService } from '../hydrometer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-hydrometer-delete',
  templateUrl: './hydrometer-delete.component.html',
})
export class HydrometerDeleteComponent implements OnInit {

  public hydrometer: Hydrometer;
  public id: string;
  public loaded: boolean = false;
  public waterMonetaryValue = 4/1000
  public waterFreeTear = 10000

  constructor(
    public data: DataService,
    public service: HydrometerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastrService: NbToastrService,
  ) {

  }

  consideredWaterConsumption(consumption: number): number {
    if(consumption <= this.waterFreeTear ){
      return 0
    } else {
      return consumption - this.waterFreeTear
    }
  }


  ngOnInit(): void {
    this.id = this.data.id
    if(!this.id){
     this.back()
    }

    this.service.getById(this.id).subscribe(
      (hydrometer: Hydrometer)=> {
        this.hydrometer = hydrometer;
        this.loaded = true
      }
    )
  }

  back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  commit(): void {
    this.service.delete(this.id).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Registro Excluido`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
    )
  }


}
