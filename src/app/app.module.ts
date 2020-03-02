import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Mis módulos
import { CoreModule } from './@core';
import { SharedModule } from './shared';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule.forRoot()
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
