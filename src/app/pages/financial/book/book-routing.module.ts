import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: 'list',
        component: BookListComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'list',
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
export class BookRoutingModule {
}

