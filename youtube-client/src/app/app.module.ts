import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './redux/reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    CoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
