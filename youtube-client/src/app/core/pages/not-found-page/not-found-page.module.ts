import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundModule } from '../../components/not-found/not-found.module';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundModule],
  exports: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
