import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedPageComponent } from './detailed-page.component';
import { DetailedModule } from '../../components/detailed/detailed.module';

@NgModule({
  declarations: [DetailedPageComponent],
  imports: [CommonModule, DetailedModule],
  exports: [DetailedPageComponent, DetailedModule],
})
export class DetailedPageModule {}
