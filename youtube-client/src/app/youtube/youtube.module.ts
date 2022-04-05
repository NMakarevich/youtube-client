import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFiltersModule } from './components/search-filters/search-filters.module';
import { ResultItemModule } from './components/result-item/result-item.module';
import { ResultListModule } from './components/result-list/result-list.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { PagesModule } from './pages/pages.module';
import { YoutubeService } from './services/youtube.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [
    PagesModule
  ],
  providers: [YoutubeService]
})
export class YoutubeModule { }
