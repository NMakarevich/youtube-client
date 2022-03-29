import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultItemComponent } from './result-list/result-item/result-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { ColorizeBorderDirective } from './result-list/result-item/colorize-border.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultListComponent,
    ResultItemComponent,
    SearchFiltersComponent,
    ColorizeBorderDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
