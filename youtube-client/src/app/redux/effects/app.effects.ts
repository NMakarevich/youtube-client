import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { YoutubeService } from '../../youtube/services/youtube.service';
import { addVideos, setVideos } from '../actions/actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private readonly youtubeService: YoutubeService) {}

  public videos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addVideos),
      switchMap(() => this.youtubeService.response$.pipe(map((videos) => setVideos({ videos })))),
    );
  });
}
