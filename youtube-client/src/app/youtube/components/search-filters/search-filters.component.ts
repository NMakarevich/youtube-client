import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
})
export class SearchFiltersComponent implements AfterViewInit {
  @ViewChild(MatExpansionPanel) expansionPanel!: MatExpansionPanel;

  @Output() sorting = new EventEmitter<string>();

  @Output() filtering = new EventEmitter<Event>();

  public date: boolean = false;

  public views: boolean = false;

  sortByDate() {
    this.date = !this.date;
    this.sorting.emit(`date-${this.date ? 'up' : 'down'}`);
  }

  sortByViews() {
    this.views = !this.views;
    this.sorting.emit(`views-${this.views ? 'up' : 'down'}`);
  }

  constructor(public youtubeService: YoutubeService) {}

  ngAfterViewInit() {
    this.youtubeService.expansionPanel = this.expansionPanel;
  }
}
