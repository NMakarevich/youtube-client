import { Component } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public userName = 'User Name';

  public searchTerm = '';

  constructor(private readonly youtubeService: YoutubeService) {}

  searchVideos() {
    this.youtubeService.searchTerm = this.searchTerm;
    this.youtubeService.searchVideos();
  }

  toggleFilterState() {
    this.youtubeService.toggleFilterState();
  }

  logout() {
    this.youtubeService.logout();
  }
}
