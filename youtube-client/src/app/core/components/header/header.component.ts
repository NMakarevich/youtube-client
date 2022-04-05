import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() isOpenedChange = new EventEmitter<boolean>();

  @Output() search = new EventEmitter<string>();

  public isOpened = this.youtubeService.filterTerm

  public searchTerm: string = '';

  public userName = 'User Name';

  constructor(public youtubeService: YoutubeService) {}


  toggle() {
    this.youtubeService.toggleFilterState()
  }

  searchVideos() {
    if (this.searchTerm) this.search.emit(this.searchTerm);
  }
}
