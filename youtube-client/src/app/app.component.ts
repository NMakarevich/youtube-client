import { Component } from '@angular/core';
import { YoutubeResponse } from './interfaces/youtube-response';
import response from './mock/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  public filterState!: boolean;

  public response: YoutubeResponse = response;

  public responseItems = response.items;
}
