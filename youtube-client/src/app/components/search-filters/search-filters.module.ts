import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFiltersComponent } from './search-filters.component';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [SearchFiltersComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SearchFiltersComponent],
})
export class SearchFiltersModule {}
