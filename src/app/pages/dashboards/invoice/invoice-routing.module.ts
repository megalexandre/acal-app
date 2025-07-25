import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvoiceCreateComponent } from './create/invoice-create.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
  },
  {
    path: 'create',
    component: InvoiceCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
