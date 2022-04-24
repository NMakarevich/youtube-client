import { Injectable } from '@angular/core';
import { ResponseItem } from '../../shared/models/response-item';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { ResponseItemById } from '../../shared/models/response-item-by-id';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { addVideos } from '../../redux/actions/actions';

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

  public response$!: Observable<ResponseItemById[]>;

  toggleFilterState() {
    if (!this.response$) return;
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
    this.response$ = this.apiService.getVideosId(searchTerm).pipe(
      map((value) => value.items.map((item) => (item as ResponseItem).id.videoId)),
      switchMap((id) => this.apiService.getVideosById(id)),
      map((result) => {
        return result.items as ResponseItemById[];
      }),
    );
    this.store.dispatch(addVideos());
  }

  showInfo(id: string) {
    this.router.navigate(['search', id as string]);
  }
}
