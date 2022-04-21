import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringPipe } from './filtering/filtering.pipe';
import { SortingPipe } from './sorting/sorting.pipe';

@NgModule({
  declarations: [FilteringPipe, SortingPipe],
  imports: [CommonModule],
  exports: [FilteringPipe, SortingPipe],
})
export class PipesModule {}
