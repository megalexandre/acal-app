import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiverComponent } from './receiver.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '',
    component: ReceiverComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
      {
        pathMatch: 'full',
        path: '**',
        redirectTo: 'search',
      },
    ],
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
export class ReceiverRoutingModule {}

