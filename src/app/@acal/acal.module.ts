import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { ErrorMessageComponent } from './form/error-message/error-message.component';
import { AppTableFooterComponent } from './table/app-table-footer/app-table-footer.component';
import { AppTableComponent } from './table/app-table/app-table.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbIconModule,
  ],
  declarations: [
    AppTableComponent,
    AppTableFooterComponent,
    ErrorMessageComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    AddButtonComponent,
  ],
  exports:[
    AppTableComponent,
    AppTableFooterComponent,
    ErrorMessageComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    AddButtonComponent
  ]
})
export class AcalModule { }

