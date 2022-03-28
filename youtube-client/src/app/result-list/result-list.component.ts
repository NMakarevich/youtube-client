import { Component, Input } from '@angular/core';
import { ResponseItem } from '../interfaces/response-item';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  @Input() results: ResponseItem[] = [];
}
