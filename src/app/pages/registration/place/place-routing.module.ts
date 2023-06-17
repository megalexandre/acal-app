import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceAddComponent } from './place-add/place-add.component';
import { PlaceDeleteComponent } from './place-delete/place-delete.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceComponent } from './place.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceComponent,
    children: [
    {
      path: 'list',
      component: PlaceListComponent
    },
    {
      path: 'add',
      component: PlaceAddComponent
    },
    {
      path: 'edit',
      component: PlaceEditComponent
    },
    {
      path: 'delete',
      component: PlaceDeleteComponent
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
export class PlaceRoutingModule {
}

