import { Component } from '@angular/core';
import { HydrometerService } from '../hydrometer.service';
import { Hydrometer, SaveHydrometer } from '@model/default/hydrometer';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { HydrometerGenerater, LinkHydrometerPair } from '@model/default/link';

@Component({
  selector: 'ngx-hydrometer-add',
  templateUrl: './hydrometer-add.component.html',
})
export class HydrometerAddComponent {

  reference: string
  data: HydrometerGenerater[]

  waterFreeTear = 10000
  waterMonetaryValue = 4/1000

  constructor(
    private service: HydrometerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastrService: NbToastrService,
  ) {}

  setReference(reference: string){
    this.reference = reference
    this.loadData()
  }

  waterConsumtion(last: number, actual: number): number{
    return actual - last
  }

  consideredWaterConsumption(last: number, actual: number): number {
    const consumption = this.waterConsumtion(last, actual)

    if(consumption <= this.waterFreeTear ){
      return 0
    } else {
      return consumption - this.waterFreeTear
    }
  }

  waterValue(linkHydrometerPair: LinkHydrometerPair): number {
    linkHydrometerPair.value =
       this.consideredWaterConsumption(linkHydrometerPair.lastConsumption, linkHydrometerPair.actualConsumption) * this.waterMonetaryValue

      return linkHydrometerPair.value
    }

  loadData(){
    this.data = [];
    this.service.findByReference(this.reference).subscribe(
      (data) => {
        this.data = data
        this.data.forEach( (data)=>data.linkHydrometerPair.forEach((item)=>{item.checked = false}) )
      }
    )
  }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  public save(){
    const allLinkHydrometerPairs: LinkHydrometerPair[] = [];
    const hydrometers: SaveHydrometer[] = [];

    for (const generater of this.data) {
      allLinkHydrometerPairs.push(...generater.linkHydrometerPair);
    }

    allLinkHydrometerPairs
    .filter((item)=> item.checked === true)
    .forEach(item => {
      hydrometers.push({
        reference: this.reference,
        costValue: item.value,
        consumption: item.actualConsumption,
        link: { id: item.link.id },
      })
    })


    this.service.saveAll(
      hydrometers
    ).subscribe(
      () => {
        this.loadData();
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }
    )
  }

}
