import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { HeaderModule } from '../../../core/components/header/header.module';
import { YoutubeModule } from '../../youtube.module';
import { SearchFiltersModule } from '../../components/search-filters/search-filters.module';
import { ResultListModule } from '../../components/result-list/result-list.module';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SearchFiltersModule,
    ResultListModule,
    DirectivesModule,
  ],
  exports: [
    SearchPageComponent,
    SearchFiltersModule,
    ResultListModule,
    DirectivesModule,]
})
export class SearchPageModule { }
