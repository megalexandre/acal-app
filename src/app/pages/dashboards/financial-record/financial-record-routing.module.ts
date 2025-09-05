import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialRecordComponent } from './financial-record.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialRecordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialRecordRoutingModule {}
