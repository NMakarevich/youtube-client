import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, YoutubeRoutingModule],
  exports: [PagesModule],
})
export class YoutubeModule {}
