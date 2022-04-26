import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeService } from '../../youtube/services/youtube.service';
import { searchVideos, setVideos } from '../actions/actions';
import { debounceTime, filter, map, mergeMap, Observable } from 'rxjs';
import { ResponseItemById } from '../../shared/models/response-item-by-id';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private readonly youtubeService: YoutubeService) {}

  public videos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchVideos),
      map(({ event }) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      filter((searchTerm) => searchTerm.length > 3),
      mergeMap(
        (searchTerm) =>
          this.youtubeService.searchVideosId(searchTerm) as Observable<ResponseItemById[]>,
      ),
      map((result) => setVideos({ videos: result })),
    );
  });
}
