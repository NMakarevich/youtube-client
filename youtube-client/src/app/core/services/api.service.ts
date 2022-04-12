import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeResponse } from '../../shared/models/youtube-response';
import { Observable } from 'rxjs';

function stringifyParams(params: { [key: string]: string | string[] | number }) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getVideosId(searchTerm: string): Observable<YoutubeResponse> {
    const params = {
      part: 'snippet',
      maxResults: 25,
      q: searchTerm,
    };
    return this.http.get<YoutubeResponse>(`search?${stringifyParams(params)}`);
  }

  getVideosById(id: Array<string>): Observable<YoutubeResponse> {
    const params = {
      part: 'snippet%2CcontentDetails%2Cstatistics',
      id: id,
    };
    return this.http.get<YoutubeResponse>(`videos?${stringifyParams(params)}`);
  }
}
