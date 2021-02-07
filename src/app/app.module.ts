import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ToastMakerComponent } from './toast-maker/toast-maker.component';
import { ToastModule } from 'src/shared/toast/toast.module';
import * as fromApp from './store/app.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ToastEffects } from 'src/shared/toast/store/toast.effects';

@NgModule({
  declarations: [
    AppComponent,
    ToastMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([ToastEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
