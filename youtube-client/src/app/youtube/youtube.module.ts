import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { YoutubeService } from './services/youtube.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule],
  exports: [PagesModule],
  providers: [YoutubeService],
})
export class YoutubeModule {}
