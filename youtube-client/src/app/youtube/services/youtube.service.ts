import { Injectable } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ResponseItem } from '../../shared/models/response-item';
import response from '../../shared/mock/response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private router: Router) {}

  public filterState = false;

  public expansionPanel!: MatExpansionPanel;

  public searchTerm = '';

  public sortTerm = '';

  public filterTerm = '';

  public selectedResult?: ResponseItem;

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
    if (this.router.url !== '/search') return;
    if (this.searchTerm) this.response = response.items;
  }

  showInfo(id: string | undefined) {
    this.selectedResult = this.response.find((item) => item.id === (id as string));
    this.router.navigate(['search', id as string]);
  }

  logout() {
    localStorage.setItem('authorisation', '');
    this.router.navigate(['auth']);
  }
}
