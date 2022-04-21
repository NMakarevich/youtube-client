import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFiltersComponent } from './search-filters.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SearchFiltersComponent],
  imports: [CommonModule, PipesModule, SharedModule],
  exports: [SearchFiltersComponent],
})
export class SearchFiltersModule {}
