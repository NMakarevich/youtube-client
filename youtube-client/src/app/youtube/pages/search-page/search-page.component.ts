import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  constructor(private readonly youtubeService: YoutubeService) {}

  setSortTerm(term: string) {
    this.youtubeService.setSortTerm(term);
  }

  setFilterTerm(event: Event) {
    this.youtubeService.setFilterTerm(event);
  }

  getFilterState() {
    return this.youtubeService.filterState;
  }

  getSortTerm() {
    return this.youtubeService.sortTerm;
  }

  getFilterTerm() {
    return this.youtubeService.filterTerm;
  }
}
