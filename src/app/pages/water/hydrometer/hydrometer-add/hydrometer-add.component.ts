import { Component } from '@angular/core';
import { HydrometerService } from '../hydrometer.service';
import { Hydrometer } from '@model/default/hydrometer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-hydrometer-add',
  templateUrl: './hydrometer-add.component.html',
})
export class HydrometerAddComponent {

  reference: string
  data: Hydrometer[]

  waterFreeTear = 10000
  waterMonetaryValue = 4/1000

  constructor(
    private service: HydrometerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {}

  setReference(reference: string){
    this.reference = reference
    this.loadData()
  }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  public save(){
    this.service.saveAll(
      this.data.map(d =>({
        id: d.id,
        reference: d.reference,
        costValue: this.consideredWaterConsumption(d.consumption) * this.waterMonetaryValue,
        consumption: d.consumption,
        link: {
          id: d.link.id
        },
      })
    )).subscribe(
      () => {
        this.back();
      }
    )

  }

  consideredWaterConsumption(consumption: number): number {
    if(consumption <= this.waterFreeTear ){
      return 0
    } else {
      return consumption - this.waterFreeTear
    }
  }

  loadData(){
    this.data = [];
    this.service.findByReference(this.reference).subscribe(
      link => link.forEach(l => {
        this.data.push({
          id: null,
          reference: this.reference,
          costValue: 0,
          consumption: 0,
          link: l,
        })
      })
    )
  }
}
