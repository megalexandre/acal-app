import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceGenerateComponent } from './invoice-generate/invoice-generate.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';


const routes: Routes = [ //{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
  {
    path: '',
    component: InvoiceComponent,
    children: [
      {
        path: 'generate',
        component: InvoiceGenerateComponent,
      },
      {
        path: 'list',
        component: InvoiceListComponent,
      },
      {
        path: 'view',
        component: InvoiceViewComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'generate',
      },
      {
        pathMatch: 'full',
        path: '**',
        redirectTo: 'generate',
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
export class InvoiceRoutingModule {}

