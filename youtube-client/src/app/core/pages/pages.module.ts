import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { CreateCardPageModule } from './create-card-page/create-card-page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NotFoundPageModule, CreateCardPageModule],
  exports: [NotFoundPageModule, CreateCardPageModule],
})
export class PagesModule {}
