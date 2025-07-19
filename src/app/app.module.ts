import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';

// Auth
import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { initFirebaseBackend } from './authUtils';
import { FakeBackendInterceptor } from './core/helpers/fake-backend';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';

// Language
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// Store
import { rootReducer } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EcommerceEffects } from './store/Ecommerce/ecommerce_effect';
import { ProjectEffects } from './store/Project/project_effect';
import { TaskEffects } from './store/Task/task_effect';
import { CRMEffects } from './store/CRM/crm_effect';
import { CryptoEffects } from './store/Crypto/crypto_effect';
import { InvoiceEffects } from './store/Invoice/invoice_effect';
import { TicketEffects } from './store/Ticket/ticket_effect';
import { FileManagerEffects } from './store/File Manager/filemanager_effect';
import { TodoEffects } from './store/Todo/todo_effect';
import { ApplicationEffects } from './store/Jobs/jobs_effect';
import { ApikeyEffects } from './store/APIKey/apikey_effect';
import { AuthenticationEffects } from './store/Authentication/authentication.effects';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { NbThemeModule } from '@nebular/theme';

registerLocaleData(localePt);

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

if (environment.defaultauth === 'firebase') {
  initFirebaseBackend(environment.firebaseConfig);
} else {
  FakeBackendInterceptor;
}



@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },

    }),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AuthenticationEffects, EcommerceEffects, ProjectEffects, TaskEffects, CRMEffects, CryptoEffects, InvoiceEffects, TicketEffects, FileManagerEffects, TodoEffects, ApplicationEffects, ApikeyEffects]),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    PagesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    provideHttpClient(withInterceptorsFromDi()),
    
  ],
})
export class AppModule {}
