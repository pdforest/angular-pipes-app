import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';

// Cambio el locale de forma global
import localeEsAr from '@angular/common/locales/es-AR';
import localeFr  from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
