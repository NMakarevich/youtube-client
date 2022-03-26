import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
})
export class SearchFiltersComponent implements OnChanges {
  @Input() isOpened!: boolean;

  @ViewChild(MatExpansionPanel) expansionPanel!: MatExpansionPanel;

  ngOnChanges() {
    if (!this.expansionPanel) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !this.isOpened ? this.expansionPanel.close() : this.expansionPanel.open();
  }
}
