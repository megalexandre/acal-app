import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentModule } from './../../../component/component.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';


@NgModule({
  imports: [
    ThemeModule,
    UserRoutingModule,
    NbCardModule,
    NbIconModule,
    ComponentModule,
    AcalModule,
    NbSpinnerModule,
    NbButtonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NbInputModule,
    CommonModule,
    NbButtonModule,
    PipeModule,
    NbFormFieldModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserAddComponent,
  ],
  providers:[
    UserService,
  ]
})
export class UserModule { }
