import { Component } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public userName = 'User Name';

  constructor(public youtubeService: YoutubeService) {}
}
