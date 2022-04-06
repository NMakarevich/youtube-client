import { Injectable } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ResponseItem } from '../../shared/models/response-item';
import response from '../../shared/mock/response';

@Injectable()
export class YoutubeService {
  public filterState = false;

  public expansionPanel!: MatExpansionPanel;

  public searchTerm = '';

  public sortTerm = '';

  public filterTerm = '';

  public response: ResponseItem[] = [];

  toggleFilterState() {
    if (!this.expansionPanel) return;
    this.filterState = !this.filterState;
    if (this.filterState) this.expansionPanel.open();
    else this.expansionPanel.close();
  }

  getSortTerm(item: string) {
    this.sortTerm = item;
  }

  getFilterTerm(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterTerm = target.value;
  }

  searchVideos() {
    if (this.searchTerm) this.response = response.items;
  }
}
