import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Router } from '@angular/router';
import { ResponseItemById } from '../../../shared/models/response-item-by-id';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent {
  @Input() result?: ResponseItemById;

  constructor(private readonly youtubeService: YoutubeService, private readonly router: Router) {}

  goBack() {
    this.router.navigate(['..']);
  }
}
