import { Injectable } from '@angular/core';
import { ResponseItem } from '../../shared/models/response-item';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { ResponseItemById } from '../../shared/models/response-item-by-id';
import { Store } from '@ngrx/store';
import { setVideos } from '../../redux/actions/actions';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private readonly router: Router,
    private readonly apiService: ApiService,
    private readonly store: Store,
  ) {}

  public filterState = false;

  public sortTerm = '';

  public filterTerm = '';

  public id!: Array<string>;

  public selectedResult?: ResponseItemById;

  public response$: ResponseItemById[] = [];

  toggleFilterState() {
    if (!this.response$.length) return;
    this.filterState = !this.filterState;
  }

  setSortTerm(item: string) {
    this.sortTerm = item;
  }

  setFilterTerm(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterTerm = target.value;
  }

  searchVideosId(searchTerm: string) {
    if (this.router.url !== '/search') return;
    this.apiService.getVideosId(searchTerm).subscribe((val) => {
      const id = val.items.map((item) => (item as ResponseItem).id.videoId);
      this.apiService.getVideosById(id).subscribe((result) => {
        this.response$ = result.items as ResponseItemById[];
        const videos = this.response$;
        this.store.dispatch(setVideos({ videos }));
        console.log(this.store);
      });
    });
  }

  showInfo(id: string) {
    this.router.navigate(['search', id as string]);
  }
}
