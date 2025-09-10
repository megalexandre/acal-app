import { Component, OnInit } from '@angular/core';
import { WaterMeterService } from './water-meter.service';
import { WaterMeter } from './water-meter.model';


@Component({
  selector: 'app-water-meter',
  templateUrl: './water-meter.component.html',
})
export class WaterMeterComponent implements OnInit{

  page: any;
  ready = false;

  constructor(
    private service: WaterMeterService,
  ) {}

  trackById(index: number, item: WaterMeter): string {
    return item.id;
  }
  
  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.ready = false;
  }

  onPageChange(page: number): void {
    setTimeout(() => {
      this.search();
    });
  }

}
