import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { ResponseItemById } from '../../../shared/models/response-item-by-id';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input() result?: ResponseItemById;

  constructor(private readonly youtubeService: YoutubeService) {}

  showInfo(id: string) {
    this.youtubeService.showInfo(id);
  }
}
