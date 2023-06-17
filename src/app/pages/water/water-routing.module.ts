import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterComponent } from './water.component';

const routes: Routes = [
  {
    path: '',
    component: WaterComponent,
    children: [
      {
        path: 'hydrometer',
        loadChildren: () => import('./hydrometer/hydrometer.module')
          .then(m => m.HydrometerModule),
      },
      {
        path: 'quality',
        loadChildren: () => import('./quality/quality.module')
          .then(m => m.QualityModule),
      },
    { path: '', redirectTo: 'quality', pathMatch: 'full' },
    { path: '**', redirectTo: 'quality' },
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class WaterRoutingModule {
}

