import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { ResponseItemById } from '../../../shared/models/response-item-by-id';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVideos } from '../../../redux/selectors/selectors';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  @Input() results$!: Observable<ResponseItemById[]>;

  @Input() searchTerm: string = '';

  @Input() sortTerm: string = '';

  @Input() filterTerm: string = '';

  constructor(public youtubeService: YoutubeService, private readonly store: Store) {}

  public videos$ = this.store.select(selectVideos);
}
