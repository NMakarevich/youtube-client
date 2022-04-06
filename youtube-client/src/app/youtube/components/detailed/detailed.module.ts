import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedComponent } from './detailed.component';
import { SharedModule } from '../../../shared/shared.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [DetailedComponent],
  imports: [CommonModule, SharedModule, DirectivesModule],
  exports: [DetailedComponent],
})
export class DetailedModule {}
