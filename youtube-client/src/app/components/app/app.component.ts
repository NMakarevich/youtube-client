import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  public filterState!: boolean;

  public searchTerm = '';

  public sortTerm = '';

  public filterTerm = '';

  getSearchTerm(item: string) {
    this.searchTerm = item;
  }

  getSortTerm(item: string) {
    this.sortTerm = item;
  }

  getFilterTerm(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterTerm = target.value;
  }
}
