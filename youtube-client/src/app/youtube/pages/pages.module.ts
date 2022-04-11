import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedPageModule } from './detailed-page/detailed-page.module';
import { SearchPageModule } from './search-page/search-page.module';

@NgModule({
  declarations: [],
  exports: [SearchPageModule, DetailedPageModule],
  imports: [CommonModule, DetailedPageModule, SearchPageModule],
})
export class PagesModule {}
