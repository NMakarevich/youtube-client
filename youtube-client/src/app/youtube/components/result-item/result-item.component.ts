import { Component, Input } from '@angular/core';
import { ResponseItem } from '../../../shared/models/response-item';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() result?: ResponseItem;

  constructor(private readonly youtubeService: YoutubeService) {}

  showInfo(id: string) {
    this.youtubeService.showInfo(id);
  }
}
