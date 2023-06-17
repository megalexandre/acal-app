import { HydrometerListComponent } from './hydrometer-list/hydrometer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HydrometerComponent } from './hydrometer.component';
import { HydrometerAddComponent } from './hydrometer-add/hydrometer-add.component';
import { HydrometerDeleteComponent } from './hydrometer-delete/hydrometer-delete.component';
import { HydrometerEditComponent } from './hydrometer-edit/hydrometer-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HydrometerComponent,
    children: [
      {
        path: 'list',
        component: HydrometerListComponent,
      },
      {
        path: 'add',
        component: HydrometerAddComponent,
      },
      {
        path: 'delete',
        component: HydrometerDeleteComponent,
      },
      {
        path: 'edit',
        component: HydrometerEditComponent,
      },

    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', redirectTo: 'list' },
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
export class HydrometerRoutingModule {
}

