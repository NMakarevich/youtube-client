import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderModule } from '../header/header.module';
import { SearchFiltersModule } from '../search-filters/search-filters.module';
import { ResultListModule } from '../result-list/result-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, HeaderModule, SearchFiltersModule, ResultListModule],
  exports: [AppComponent],
})
export class AppModule {}
