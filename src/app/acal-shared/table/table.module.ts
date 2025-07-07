import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableBodyComponent } from './table-body.component';
import { TableHeaderComponent } from './table-header.component';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
  ]
})
export class TableModule {}