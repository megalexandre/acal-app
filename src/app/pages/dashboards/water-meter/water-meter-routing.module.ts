import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterMeterComponent } from './water-meter.component';

const routes: Routes = [
  {
    path: '',
    component: WaterMeterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterMeterRoutingModule {}
