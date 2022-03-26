import { Component } from '@angular/core';
import { ResponseItem } from '../../interfaces/response-item';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  public responseItem?: ResponseItem;
}
