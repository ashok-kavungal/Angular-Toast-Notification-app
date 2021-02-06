import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastMakerComponent } from './toast-maker/toast-maker.component';
import { ToastModule } from 'src/shared/toast/toast.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToastMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
