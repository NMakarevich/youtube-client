import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { ResponseItemById } from '../../../shared/models/response-item-by-id';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  @Input() results$: ResponseItemById[] = [];

  @Input() searchTerm: string = '';

  @Input() sortTerm: string = '';

  @Input() filterTerm: string = '';

  constructor(public youtubeService: YoutubeService) {}
}
