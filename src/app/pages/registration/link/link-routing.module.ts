import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkAddComponent } from './link-add/link-add.component';
import { LinkInactiveComponent } from './link-inactive/link-inactive.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkViewComponent } from './link-view/link-view.component';
import { LinkComponent } from './link.component';

const routes: Routes = [
  {
    path: '',
    component: LinkComponent,
    children: [
    {
      path: 'list',
      component: LinkListComponent
    },
    {
      path: 'add',
      component: LinkAddComponent
    },
    {
      path: 'view',
      component: LinkViewComponent
    },
    {
      path: 'inactive',
      component: LinkInactiveComponent
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
export class LinkRoutingModule {
}

