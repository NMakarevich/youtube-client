import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../../shared/models/youtube-response';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getVideosId(searchTerm: string): Observable<YoutubeResponse> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', 25)
      .set('q', searchTerm)
      .set('key', environment.API_KEY);
    return this.http.get<YoutubeResponse>('search', { params });
  }

  getVideosById(id: Array<string>): Observable<YoutubeResponse> {
    const params = new HttpParams()
      .set('part', ['snippet', 'statistics'].join(','))
      .set('id', id.join(','))
      .set('key', environment.API_KEY);
    return this.http.get<YoutubeResponse>('videos', { params });
  }
}
