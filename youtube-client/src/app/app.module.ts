import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { ColorizeBorderDirective } from './directives/colorize-border/colorize-border.directive';
import { FormsModule } from '@angular/forms';
import { SortingPipe } from './pipes/sorting/sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultListComponent,
    ResultItemComponent,
    SearchFiltersComponent,
    ColorizeBorderDirective,
    SortingPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
