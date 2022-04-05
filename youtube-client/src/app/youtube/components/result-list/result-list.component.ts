import { Component, Input, OnChanges } from '@angular/core';
import { ResponseItem } from '../../../shared/models/response-item';
import response from '../../../shared/mock/response';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnChanges {
  @Input() results: ResponseItem[] = [];

  @Input() searchTerm: string = '';

  @Input() sortTerm: string = '';

  @Input() filterTerm: string = '';

  constructor(public youtubeService: YoutubeService) {
  }

  ngOnChanges() {
    if (this.youtubeService.searchTerm) this.results = response.items;
  }
}
