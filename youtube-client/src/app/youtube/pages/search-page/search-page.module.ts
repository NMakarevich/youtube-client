import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchFiltersModule } from '../../components/search-filters/search-filters.module';
import { ResultListModule } from '../../components/result-list/result-list.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, SearchFiltersModule, ResultListModule, DirectivesModule],
  exports: [SearchPageComponent, SearchFiltersModule, ResultListModule, DirectivesModule],
})
export class SearchPageModule {}
