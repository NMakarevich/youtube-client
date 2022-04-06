import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { ResponseItem } from '../../../shared/models/response-item';
import response from '../../../shared/mock/response';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent {
  public result: ResponseItem = response.items[0];

  constructor(public youtubeService: YoutubeService) {}
}
