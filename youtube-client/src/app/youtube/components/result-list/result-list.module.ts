import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './result-list.component';
import { ResultItemModule } from '../result-item/result-item.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [ResultListComponent],
  imports: [CommonModule, ResultItemModule, PipesModule],
  exports: [ResultListComponent, ResultItemModule, PipesModule],
})
export class ResultListModule {}
