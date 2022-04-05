import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  constructor(public youtubeService: YoutubeService) { }

  ngOnInit(): void {
  }

  getSearchTerm(item: string) {
    this.youtubeService.getSearchTerm(item)
  }

  getSortTerm(item: string) {
    this.youtubeService.getSortTerm(item);
  }

  getFilterTerm(event: Event) {
    this.youtubeService.getFilterTerm(event)
  }

}
