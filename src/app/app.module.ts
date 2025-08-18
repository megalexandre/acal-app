import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';

// Auth
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { initFirebaseBackend } from './authUtils';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { FakeBackendInterceptor } from './core/helpers/fake-backend';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';

// Language
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Store
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { rootReducer } from './store';
import { ApikeyEffects } from './store/APIKey/apikey_effect';
import { AuthenticationEffects } from './store/Authentication/authentication.effects';
import { CRMEffects } from './store/CRM/crm_effect';
import { CryptoEffects } from './store/Crypto/crypto_effect';
import { EcommerceEffects } from './store/Ecommerce/ecommerce_effect';
import { FileManagerEffects } from './store/File Manager/filemanager_effect';
import { InvoiceEffects } from './store/Invoice/invoice_effect';
import { ApplicationEffects } from './store/Jobs/jobs_effect';
import { ProjectEffects } from './store/Project/project_effect';
import { TaskEffects } from './store/Task/task_effect';
import { TicketEffects } from './store/Ticket/ticket_effect';
import { TodoEffects } from './store/Todo/todo_effect';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
7

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "left",
    allowNegative: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
}; 

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
    CurrencyMaskModule,
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
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },

    provideHttpClient(withInterceptorsFromDi()),
    
  ],
})
export class AppModule {}
