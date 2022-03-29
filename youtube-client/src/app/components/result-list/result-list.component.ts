import { Component, Input, OnChanges } from '@angular/core';
import { ResponseItem } from '../../interfaces/response-item';
import response from '../../mock/response';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnChanges {
  @Input() results: ResponseItem[] = [];

  @Input() searchTerm: string = '';

  ngOnChanges() {
    if (this.searchTerm) this.results = response.items;
  }
}
