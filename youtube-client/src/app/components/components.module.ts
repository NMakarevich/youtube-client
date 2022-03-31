import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from './app/app.module';
import { HeaderModule } from './header/header.module';
import { ResultItemModule } from './result-item/result-item.module';
import { ResultListModule } from './result-list/result-list.module';
import { SearchFiltersModule } from './search-filters/search-filters.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppModule,
    HeaderModule,
    ResultItemModule,
    ResultListModule,
    SearchFiltersModule,
    DirectivesModule,
    PipesModule,
    MaterialModule,
  ],
})
export class ComponentsModule {}
