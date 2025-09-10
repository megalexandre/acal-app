import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then((m) => m.AddressModule),
  },
  {
    path: 'places',
    loadChildren: () => import('./place/place.module').then((m) => m.PlaceModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'water-quality',
    loadChildren: () => import('./water-quality/water-quality.module').then((m) => m.WaterQualityModule),
  },
  {
    path: 'links',
    loadChildren: () => import('./link/link.module').then((m) => m.LinkModule),
  },
  {
    path: 'invoices',
    loadChildren: () => import('./invoice/invoice.module').then((m) => m.InvoiceModule),
  },
   {
    path: 'financial-record',
    loadChildren: () => import('./financial-record/financial-record.module').then((m) => m.FinancialRecordModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
