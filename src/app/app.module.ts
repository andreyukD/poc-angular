import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserObserveComponent} from './user-observe.component';

@NgModule({
  declarations: [
    AppComponent,
    UserObserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserObserveComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
