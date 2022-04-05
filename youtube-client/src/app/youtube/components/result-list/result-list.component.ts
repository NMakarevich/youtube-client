import { Component, Input } from '@angular/core';
import { ResponseItem } from '../../../shared/models/response-item';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  @Input() results: ResponseItem[] = [];

  @Input() searchTerm: string = '';

  @Input() sortTerm: string = '';

  @Input() filterTerm: string = '';

  constructor(public youtubeService: YoutubeService) {}
}
