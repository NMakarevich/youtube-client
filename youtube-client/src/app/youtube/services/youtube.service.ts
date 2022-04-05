import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeService {

  public filterState = false;

  public searchTerm = '';

  public sortTerm = '';

  public filterTerm = '';

  constructor() { }

  toggleFilterState() {
    this.filterState = !this.filterState
  }

  getSearchTerm(item: string) {
    this.searchTerm = item;
  }

  getSortTerm(item: string) {
    this.sortTerm = item;
  }

  getFilterTerm(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterTerm = target.value;
  }
}
