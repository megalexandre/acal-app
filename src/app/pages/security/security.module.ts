import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import { SecurityComponent, SecurityRoutingModule } from './_index';


@NgModule({
  imports: [
    ThemeModule,
    SecurityRoutingModule,
  ],
  declarations: [
    SecurityComponent,
  ],
})
export class SecurityModule { }
