import { QualityListComponent } from './quality-list/quality-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityComponent } from './quality.component';
import { QualityAddComponent } from './quality-add/quality-add.component';
import { QualityDeleteComponent } from './quality-delete/quality-delete.component';
import { QualityEditComponent } from './quality-edit/quality-edit.component';

const routes: Routes = [
  {
    path: '',
    component: QualityComponent,

    children: [
      {
        path: 'list',
        component: QualityListComponent
      },
      {
        path: 'add',
        component: QualityAddComponent
      },
      {
        path: 'edit',
        component: QualityEditComponent
      },
      {
        path: 'delete',
        component: QualityDeleteComponent
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
export class QualityRoutingModule {
}

