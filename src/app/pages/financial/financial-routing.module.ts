import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancialComponent } from './financial.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialComponent,

    children: [
      {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice.module')
          .then(m => m.InvoiceModule),
      },
      {
        path: 'book',
        loadChildren: () => import('./book/book.module')
          .then(m => m.BookModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'invoice',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'invoice',
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
export class FinancialRoutingModule {
}

