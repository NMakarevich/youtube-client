import { Injectable } from '@angular/core';
import { ResponseItem } from '../../shared/models/response-item';
import response from '../../shared/mock/response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private readonly router: Router) {}

  public filterState = false;

  public searchTerm = '';

  public sortTerm = '';

  public filterTerm = '';

  public selectedResult?: ResponseItem;

  public response: ResponseItem[] = [];

  toggleFilterState() {
    this.filterState = !this.filterState;
  }

  setSortTerm(item: string) {
    this.sortTerm = item;
  }

  setFilterTerm(event: Event) {
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
    localStorage.removeItem('authorization');
    this.router.navigate(['auth']);
  }
}
