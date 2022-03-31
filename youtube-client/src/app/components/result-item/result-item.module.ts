import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultItemComponent } from './result-item.component';
import { MaterialModule } from '../../shared/material/material.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [ResultItemComponent],
  imports: [CommonModule, MaterialModule, DirectivesModule],
  exports: [ResultItemComponent],
})
export class ResultItemModule {}
