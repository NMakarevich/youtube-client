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

  getSearchTerm(item: string) {
    this.searchTerm = item;
  }
}
