import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LeadsComponent } from './leads/leads.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PotentialduplicatesComponent } from './leads/potentialduplicates/potentialduplicates.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    PotentialduplicatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
