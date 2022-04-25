import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectVideos } from '../../../redux/selectors/selectors';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  @Input() searchTerm: string = '';

  @Input() sortTerm: string = '';

  @Input() filterTerm: string = '';

  constructor(private readonly store: Store) {}

  public videos$ = this.store.select(selectVideos);
}
