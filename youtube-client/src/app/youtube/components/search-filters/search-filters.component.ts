import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
})
export class SearchFiltersComponent implements OnChanges {
  @Input() filterState!: boolean;

  @Output() sorting = new EventEmitter<string>();

  @Output() filtering = new EventEmitter<Event>();

  @ViewChild(MatExpansionPanel) expansionPanel!: MatExpansionPanel;

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

  ngOnChanges() {
    if (!this.expansionPanel) return;
    if (this.filterState) this.expansionPanel.open();
    else this.expansionPanel.close();
  }
}
