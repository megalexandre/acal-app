import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterMeterComponent } from './water-meter.component';
import { WaterMeterCreateComponent } from './create/water-meter-create.component';

const routes: Routes = [
  {
    path: '',
    component: WaterMeterComponent,
  },
  {
    path: 'create',
    component: WaterMeterCreateComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterMeterRoutingModule {}
