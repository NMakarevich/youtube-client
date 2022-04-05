import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultItemComponent } from './result-item.component';
import { DirectivesModule } from '../../directives/directives.module';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [ResultItemComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    SharedModule
  ],
  exports: [ResultItemComponent]
})
export class ResultItemModule { }
