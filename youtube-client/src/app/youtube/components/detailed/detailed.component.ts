import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { ResponseItem } from '../../../shared/models/response-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent {
  @Input() result?: ResponseItem;

  constructor(private readonly youtubeService: YoutubeService, private readonly router: Router) {}

  goBack() {
    this.router.navigate(['..']);
  }
}
